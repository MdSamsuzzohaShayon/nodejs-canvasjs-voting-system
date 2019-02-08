//  HERE IS OUR FRONT END JAVASCRIPT

const form = document.getElementById('vote-form');

//FORM SUBMIT EVENT
form.addEventListener('submit', (e) => {
    const choice = document.querySelector('input[name=os]:checked').value;
    const data = {
        os: choice
    };

    //to send post req we use fetch
    //THIS WILL GET DATA FROM POST METHOD OF POOL.JS
    fetch('http://localhost:3000/poll', {
            method: 'post',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })

        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    e.preventDefault();
});


let dataPoints = [{
        sapn: 'Windows',
        y: 0
    },
    {
        span: 'MacOS',
        y: 0
    },
    {
        span: 'Linux',
        y: 0
    },
    {
        span: 'Others',
        y: 0
    }
];


const chartContainer = document.querySelector('#chartContainer');

if (chartContainer) {
    const chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        theme: 'theme1',
        title: {
            text: 'OS Results'
        },
        data: [{
            type: 'column',
            dataPoints: dataPoints
        }]
    });
    chart.render();
}