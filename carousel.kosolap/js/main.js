(function() {
    var carousel = {
        containerCarousel: document.querySelector('.carousel'),
        listCarousel: document.querySelectorAll('.carousel li'),
        itemCarousel: [],
        countLeft: 0,
        countRight: 0,
        maxHeigth: 0,
        pagination: document.createElement('div'),
        t: this,

        moveLeft: function() {
            console.log(this.itemCarouse);
            var left = document.querySelector('.left');
            var center = document.querySelector('.center');
            var right = document.querySelector('.right');


            left.innerHTML = this.itemCarousel[this.countLeft++];
            if (this.countLeft === this.itemCarousel.length) this.countLeft = 0;

            this.countRight++;
            if (this.countRight === this.itemCarousel.length) this.countRight = 0;

            center.className = 'left';
            right.className = 'center';
            left.className = 'right first';
        },

        moveRight: function() {
            var left = this.containerCarousel.querySelector('.left');
            var center = this.containerCarousel.querySelector('.center');
            var right = this.containerCarousel.querySelector('.right');

            right.innerHTML = this.itemCarousel[this.countRight--];
            if (this.countRight == -1) this.countRight = this.itemCarousel.length - 1;

            this.countLeft--;
            if (this.countLeft === -1) this.countLeft = this.itemCarousel.length - 1;

            center.className = 'right';
            left.className = 'center';
            right.className = 'left first';
        },

        buildCarousel: function() {

            if (this.listCarousel.length > 2) {
                if (this.itemCarousel.length === 3) {
                    countLeft = 0;
                    countRight = 2;
                } else {
                    this.countLeft = 3;
                    this.countRight = this.itemCarousel.length - 1;
                }

                for (var i = this.listCarousel.length - 1; i >= 0; i--) {
                    if (this.maxHeigth < this.listCarousel[i].offsetHeight) this.maxHeigth = this.listCarousel[i].offsetHeight;
                    this.itemCarousel[i] = this.listCarousel[i].innerHTML;
                    this.listCarousel[i].remove();
                }

                for (var j = 2; j >= 0; j--) {
                    this.containerCarousel.appendChild(this.listCarousel[j]);
                }


                this.listCarousel[0].className = 'left';
                this.listCarousel[1].className = 'center';
                this.listCarousel[2].className = 'right';

                this.containerCarousel.style.height = this.maxHeigth + 'px';

                this.addPaginator();
            }
        },

        addPaginator: function() {
            var btnLeft = document.createElement('div'),
                btnRight = document.createElement('div');

            btnLeft.className = 'btn';
            btnLeft.onclick = this.moveLeft;

            btnRight.onclick = this.moveRight;
            btnRight.className = 'btn';

            this.pagination.className = 'paginator';
            this.pagination.appendChild(btnLeft);
            this.pagination.appendChild(btnRight);

            this.containerCarousel.parentNode.appendChild(this.pagination);
        },

        start: function() {
        	this.buildCarousel();
        }
    }

carousel.start();


})();
