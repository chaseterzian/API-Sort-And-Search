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

});