$(document).ready(function() {

	dataApi = [];

	$('#request-btn').on('click', function() {
		$('#api-tr').show();

		$.get("https://restcountries.eu/rest/v2/all").done(function( data ) {

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
				td3.innerHTML = (data[i].region);
				tr.appendChild(td3);

				document.getElementById('api-table').appendChild(tr);
			}

		});

	});


	$('#search-field').keyup(function() {

		query = document.getElementById('search-field').value.toLowerCase();

		$('tr td').hide();

		for (var x = 0; x < dataApi.length; x++) {

			nameCol = dataApi[x].name.toLowerCase();
			popCol = dataApi[x].population.toString();
			regCol = dataApi[x].region.toLowerCase();

			if (popCol.indexOf(query) > - 1) {
				$('tr').eq(x+1).find('td').eq(0).show();
				$('tr').eq(x+1).find('td').eq(1).show();
				$('tr').eq(x+1).find('td').eq(2).show();
			}

			if (nameCol.indexOf(query) > - 1) {
				$('tr').eq(x+1).find('td').eq(0).show();
				$('tr').eq(x+1).find('td').eq(1).show();
				$('tr').eq(x+1).find('td').eq(2).show();
			}

			if (regCol.indexOf(query) > - 1) {
				$('tr').eq(x+1).find('td').eq(0).show();
				$('tr').eq(x+1).find('td').eq(1).show();
				$('tr').eq(x+1).find('td').eq(2).show();
			}

		}

	});

});