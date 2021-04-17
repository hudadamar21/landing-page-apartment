const topPieksCard = document. querySelectorAll('.top-pieks-card');

let topPieksSplide = new Splide('.splide.top-pieks', {
  type   : 'slide',
	perPage: 2,
  width: '90%',
  fixedHeight: '380px',
  gap: "1rem",
  arrows: false,
  pagination: false,
  padding: {
    right: '10rem',
  },
  breakpoints: {
		860: {
			perPage: 1,
      fixedHeight: '400px',
      padding: {
        right: '0'
      },
		},
	}
}).mount()

const slideAction = (action) => {
  topPieksSplide.go(action)
}

topPieksSplide.on( 'moved', function() {
	// do something
  console.log( topPieksSplide.index )
  topPieksCard.forEach(card => {
    if(card.dataset.index == topPieksSplide.index){
      card.classList.add('opacity-100', 'shadow-xl')
      card.classList.remove('opacity-50')
    } else {
      card.classList.add('opacity-50')
      card.classList.remove('opacity-100', 'shadow-xl')
    }
  })
});

new Splide( '.splide.client-review', {
	type   : 'slide',
	perPage: 2,
  width: '90%',
  fixedHeight: '400px',
  arrows: false,
  gap: "1rem",
  breakpoints: {
		860: {
			perPage: 1,
      width: '80%',
      fixedHeight: '400px',
		},
	}
}).mount();