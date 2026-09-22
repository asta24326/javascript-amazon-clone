const xhr = new XMLHttpRequest();

// to be able to wait for event
xhr.addEventListener('load', () => {
	console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send();

