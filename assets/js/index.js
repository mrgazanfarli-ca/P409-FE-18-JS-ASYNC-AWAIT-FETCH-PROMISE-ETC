// setTimeout(() => {
//     console.log('This is from setTimeout');
// }, 3000);
//
// const interval = setInterval(() => {
//     console.log('This is from setInterval');
// }, 2000);
//
// setTimeout(() => {
//     clearInterval(interval);
// }, 10000);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Everything is OK');
    }, 3000);
});

promise.then((val) => {
    const newVal = val + ' addition';
    // throw new Error('some error message');
    return newVal;
}).then((val) => {
    return val + ' another addition'
}).then(newVal => {
    console.log(newVal);
}).catch(err => {
    console.log(err)
});

// const g = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(42);
//         }, 3000);
//     });
// };
//
// const f1 = () => {
//     g().then(val => {
//         console.log(val, ' FROM THEN');
//     });
// }
//
// const f = async () => {
//     try {
//         const res = await g();
//
//         console.log(res);
//     } catch(e) {
//         console.log(e);
//     } finally {
//
//     }
// }
//
// f();
// f1();

const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Auth': localStorage.getItem('token'),
        },
        body: {
            name: 'Gazanfar',
            email: 'gazanfar@some.co.az'
        }
    }).then(res => {
        console.log(res.status, ' STATUS');
        return res.json();
    }).then(resAsJSON => {
        console.log(resAsJSON);
    }).catch(e => {
        console.log(e);
    });
};

const API_KEY = '21a4d9e8258a4ce093175225212703';

const weatherLocationInput = document.querySelector('.weather-location');
const submitButton = document.querySelector('.weather-submit-btn');
const errorRow = document.querySelector('.error-row');
const dataRow = document.querySelector('.data-row');

const fetchWeatherData = (location) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`).then(res => res.json()).then((data) => {
        if (data.error) {
            dataRow.classList.add('d-none');
            errorRow.classList.remove('d-none');
        } else {
            const {
                current: {
                    temp_c,
                    condition: {
                        icon
                    }
                },
            } = data;

            errorRow.classList.add('d-none');

            dataRow.querySelector('h3').innerText = `${temp_c} ˚C`;
            dataRow.querySelector('img').src = `https:${icon}`;
            dataRow.classList.remove('d-none');
        }
    })
};

submitButton.addEventListener('click', () => {
    const val = weatherLocationInput.value;

    if (val) {
        fetchWeatherData(val);
    } else {
        alert('Location is required');
    }
});


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This1 has been resolved');
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This2 has not been resolved');
    }, 3000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This3 has been resolved');
    }, 4000);
});

const d = +new Date();
Promise.all([p1, p2, p3]).then((val) => {
    console.log(val);
    console.log(+new Date() - d);
}).catch(e => {
    console.log(e, ' FROM CATCH');
});

Promise.race([p1, p2, p3]).then(val => {
    console.log('SUCCESS: ', val);
}).catch((err) => {
    console.log('ERROR: ', err);
});

console.log(sum(1, 2));

function sum(a, b) {
    return a + b;
}

// let a = prompt('Enter a number');

// if (confirm('Are you sure to delete user?')) {
//     // delete
// }

(function b() {
    console.log('hello from b');
})();

// const func = () => {
//     const name = 'Javid';
//
//     const alerter = () => {
//         alert(name);
//     }
//
//     return alerter;
// }
//
// const alertFunc = func();
//
// alertFunc();

const makeFunc = () => {
    const name = 'Javid';

    const alerter = () => {
        alert(name);
    }

    return alerter;
}

const alerter = makeFunc();

const addsTo = (a) => {
    // a = 10
    const summer = (b) => {
        return a + b; // 10 + b
    }

    return summer;
}

const thirty = addsTo(10)(20);

console.log(thirty);

Number.prototype.plus = function(number) {
    return this + number;
}

Number.prototype.minus = function(number) {
    return this - number;
}

console.log((5).plus(10).minus(3))
