(function() {
    myCarousel = function() {
        var carousel = {
            containerCarousel: document.querySelector('.carousel'),
            listCarousel: document.querySelectorAll('.carousel li'),
            itemCarousel: [],
            countLeft: 0,
            countRight: 0,
            maxHeigth: 0,
            pagination: document.createElement('div')
        }

        var carouselItem = {
            containerCarousel: document.querySelector('.carousel'),
            left: '',
            center: '',
            right: '',
            replace: function() {
                this.left = document.querySelector('.left');
                this.center = document.querySelector('.center');
                this.right = document.querySelector('.right');
            }
        }

        function moveLeft() {
            carouselItem.replace();

            carouselItem.left.innerHTML = carousel.itemCarousel[carousel.countLeft++];
            if (carousel.countLeft === carousel.itemCarousel.length) carousel.countLeft = 0;

            carousel.countRight++;
            if (carousel.countRight === carousel.itemCarousel.length) carousel.countRight = 0;

            carouselItem.center.className = 'left';
            carouselItem.right.className = 'center';
            carouselItem.left.className = 'right first';
        }

        function moveRight() {
        	carouselItem.replace();

            carouselItem.right.innerHTML = carousel.itemCarousel[carousel.countRight--];
            if (carousel.countRight == -1) carousel.countRight = carousel.itemCarousel.length - 1;

            carousel.countLeft--;
            if (carousel.countLeft === -1) carousel.countLeft = carousel.itemCarousel.length - 1;

            carouselItem.center.className = 'right';
            carouselItem.left.className = 'center';
            carouselItem.right.className = 'left first';
        }

        function buildCarousel() {

            if (carousel.listCarousel.length > 2) {
                if (carousel.listCarousel.length === 3) {
                    carousel.countLeft = 0;
                    carousel.countRight = 2;
                } else {
                    carousel.countLeft = 3;
                    carousel.countRight = carousel.listCarousel.length - 1;
                }

                for (var i = carousel.listCarousel.length - 1; i >= 0; i--) {
                    if (carousel.maxHeigth < carousel.listCarousel[i].offsetHeight) carousel.maxHeigth = carousel.listCarousel[i].offsetHeight;
                    carousel.itemCarousel[i] = carousel.listCarousel[i].innerHTML;
                    carousel.listCarousel[i].remove();
                }

                for (var j = 2; j >= 0; j--) {
                    carousel.containerCarousel.appendChild(carousel.listCarousel[j]);
                }
                carousel.listCarousel[0].className = 'left';
                carousel.listCarousel[1].className = 'center';
                carousel.listCarousel[2].className = 'right';

                carousel.containerCarousel.style.height = carousel.maxHeigth + 'px';

                addPaginator();
            }
        }

        function addPaginator() {
            var btnLeft = document.createElement('div'),
                btnRight = document.createElement('div');

            btnLeft.onclick = moveLeft;
            btnLeft.className = 'btn';

            btnRight.onclick = moveRight;
            btnRight.className = 'btn';

            carousel.pagination.className = 'paginator';
            carousel.pagination.appendChild(btnLeft);
            carousel.pagination.appendChild(btnRight);

            carousel.containerCarousel.parentNode.appendChild(carousel.pagination);
        }

        function start() {
            buildCarousel();
            setInterval(moveLeft, 5000);
        }

        start();
    }

    myCarousel();

})();
