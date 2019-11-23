$(document).ready(function() {

	dataApi = [];

	$('#request-btn').on('click', function() {

		$.get("https://restcountries.eu/rest/v2/all").done(function( data ) {
			$('#loader').addClass('loader');

			setTimeout(function() {
				$('#api-tr').show();
				$('#search-wrap').show();
				$('#loader').removeClass('loader');
				$('#request-btn').fadeOut(1000);

				for ( var i = 0; i < data.length; i++ ) {

					dataApi.push(data[i]);

					var tr = document.createElement('tr');   

					var td1 = document.createElement('td');
					td1.innerHTML = (data[i].name);
					tr.appendChild(td1);

					var td2 = document.createElement('td');
					td2.innerHTML = (data[i].population);
					tr.appendChild(td2);

					var td3 = document.createElement('td');
					td3.innerHTML = (data[i].subregion);
					tr.appendChild(td3);

					document.getElementById('api-tbody').appendChild(tr);
				}


			},1000);

		});

	});


	$('#search-field').keyup(function() {

		query = document.getElementById('search-field').value.toLowerCase();

		$('#api-table tr td').hide();
		$('#final-line-wrap').hide();

		for (var x = 0; x < dataApi.length; x++) {

			nameCol = dataApi[x].name.toLowerCase();
			popCol = dataApi[x].population.toString();
			regCol = dataApi[x].subregion.toLowerCase();

			if (query.indexOf("<") > -1 || query.indexOf("< ") > -1) {
				if (parseInt(popCol) <= parseInt(query.substring(1))) {
					$('#api-table tr').eq(x+1).find('td').eq(0).addClass(x.toString()).show();
					$('#api-table tr').eq(x+1).find('td').eq(1).addClass(x.toString()).show();
					$('#api-table tr').eq(x+1).find('td').eq(2).addClass(x.toString()).show();
				}
			}

			if (query.indexOf(">") > -1 || query.indexOf(">") > -1) {
				if (parseInt(popCol) >= parseInt(query.substring(1))) {
					$('#api-table tr').eq(x+1).find('td').eq(0).addClass(x.toString()).show();
					$('#api-table tr').eq(x+1).find('td').eq(1).addClass(x.toString()).show();
					$('#api-table tr').eq(x+1).find('td').eq(2).addClass(x.toString()).show();
				}
			}

			if (popCol.indexOf(query) > - 1) {
				$('#api-table tr').eq(x+1).find('td').eq(0).addClass(x.toString()).show();
				$('#api-table tr').eq(x+1).find('td').eq(1).addClass(x.toString()).show();
				$('#api-table tr').eq(x+1).find('td').eq(2).addClass(x.toString()).show();
			}

			if (nameCol.indexOf(query) > - 1) {
				$('#api-table tr').eq(x+1).find('td').eq(0).addClass(x.toString()).show();
				$('#api-table tr').eq(x+1).find('td').eq(1).addClass(x.toString()).show();
				$('#api-table tr').eq(x+1).find('td').eq(2).addClass(x.toString()).show();
			}

			if (regCol.indexOf(query) > - 1) {
				$('#api-table tr').eq(x+1).find('td').eq(0).addClass(x.toString()).show();
				$('#api-table tr').eq(x+1).find('td').eq(1).addClass(x.toString()).show();
				$('#api-table tr').eq(x+1).find('td').eq(2).addClass(x.toString()).show();
			}

		}

		if ($('#api-table td:visible').length === 3) {
			$('#final-line-wrap').fadeIn(200);

			dataApiIndex = $('#api-table td:visible').attr('class');
			
			$('#api-table tr th').hide();
			$('#api-table td:visible').hide();

			document.getElementById('final-line-img').src = dataApi[dataApiIndex].flag;
			document.getElementById('final-line-name').innerHTML = dataApi[dataApiIndex].name;
			document.getElementById('final-line-capital').innerHTML = dataApi[dataApiIndex].capital; 
			document.getElementById('final-line-population').innerHTML = dataApi[dataApiIndex].population;
			document.getElementById('final-line-region').innerHTML = dataApi[dataApiIndex].subregion;
			document.getElementById('final-line-country-code').innerHTML = dataApi[dataApiIndex].alpha3Code;
			// document.getElementById('final-line-bordering-countries').innerHTML = dataApi[dataApiIndex].borders; 
			// document.getElementById('final-line-currency-code').innerHTML = dataApi[dataApiIndex].currencies.code; 
			// document.getElementById('final-line-currency-name').innerHTML = dataApi[dataApiIndex].currencies.name; 
			// document.getElementById('final-line-currency-symbol').innerHTML = dataApi[dataApiIndex].currencies.symbol; 
			// document.getElementById('final-line-language').innerHTML = dataApi[dataApiIndex].languages.name; 
			document.getElementById('final-line-tld').innerHTML = dataApi[dataApiIndex].topLevelDomain; 
		}

	});

});