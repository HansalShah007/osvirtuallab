var suggestions = [
    {
        'text': 'First Come First Served',
        'href': 'fcfs.html'
    },
    {
        'text': 'Circular LOOK',
        'href': 'clook.html'
    },
    {
        'text': 'Circular SCAN',
        'href': 'cscan.html'
    },
    {
        'text': 'SCAN',
        'href': 'scan.html'
    },
    {
        'text': 'LOOK',
        'href': 'look.html'
    },
    {
        'text': 'Shortest Seek Time First',
        'href': 'sstf.html'
    },
    {
        'text': 'Compare Algorithms',
        'href': 'compare.html'
    },
    {
        'text': 'First In First Out',
        'href': 'fifo.html'
    },
    {
        'text': 'Last In First Out',
        'href': 'lifo.html'
    },
    {
        'text': 'Least Recently Used',
        'href': 'lru.html'
    },
    {
        'text': 'Optimal',
        'href': 'optimal.html'
    },
    {
        'text': 'Random',
        'href': 'random.html'
    },
    {
        'text': "Belady's Anamoly",
        'href': 'belady.html'
    },
    {
        'text': 'Disk Scheduling',
        'href': 'diskscheduling_index.html'
    },
    {
        'text': 'Page Replacement',
        'href': 'pagereplacement_index.html'
    }
]; 

var dropdownMenu = document.getElementById('suggestions');
dropdownMenu.style.display = 'none';
var searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', () => {
    dropdownMenu.innerHTML = ``;
    dropdownMenu.style.display = 'none';
    let userData = searchInput.value.toLowerCase().split(' ').join('');
    let relatedSuggestions = [];
    if(userData!=''){
        relatedSuggestions = suggestions.filter((obj) =>{
            return obj.text.toLowerCase().split(' ').join('').startsWith(userData);
        });
    }

    if(relatedSuggestions.length === 0 && userData!=''){
        dropdownMenu.innerHTML = `<li class='dropdown-item'>No search results</li>`;
        dropdownMenu.style.display = 'block';
    }
    else if(userData!=''){
        relatedSuggestions.forEach((value) => {
            let newDropItem = document.createElement('li');
            let newLink = document.createElement('a');
            newLink.className = 'dropdown-item'; newLink.href = value.href; newLink.innerText = value.text;
            newDropItem.appendChild(newLink);
            dropdownMenu.appendChild(newDropItem);
        });
        dropdownMenu.style.display = 'block';
    }
})


window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        document.getElementsByClassName('navbar')[0].classList.add('animate__slideOutUp');
        setTimeout(() => {
            document.getElementsByClassName('navbar')[0].style.display = 'none';

            document.getElementsByClassName('navbar')[0].classList.remove('animate__slideOutUp');
        }, 100);
    }
    else {
        if (document.getElementsByClassName('navbar')[0].style.display === 'none') {
            document.getElementsByClassName('navbar')[0].classList.add('animate__slideInDown');
            setTimeout(() => {
                document.getElementsByClassName('navbar')[0].style.display = 'block';
            }, 50);
            setTimeout(() => {
                document.getElementsByClassName('navbar')[0].classList.remove('animate__slideInDown');
            }, 500);
        }

    }
});
