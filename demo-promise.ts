async function httpGet(url: string): Promise<any> {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    // Success
                    resolve(this.response);
                } else {
                    // Something went wrong (404 etc.)
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function () {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            };
            request.open('GET', url);
            request.send();
        });
}


async function main()
{
    console.log('lay ket qua');
    await httpGet(
        'https://api.github.com/users/daovanduc79'
    )
        .then(
            function (value) {
                console.log('Contents: ' + value);
            },
            function (reason) {
                console.error('Something went wrong', reason);
            });
    
    console.log('hien thi ket qua');
}

main();