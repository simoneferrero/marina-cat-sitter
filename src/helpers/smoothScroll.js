const smoothScroll = (id, options = {}) => {
	const anchor = document.getElementById(id)

	if (anchor) {
		const offsetTop = anchor.getBoundingClientRect().top + window.pageYOffset

		window.scroll({
			top: offsetTop - (options.offset || 0),
			behavior: options.behavior || 'smooth',
		})
	}
}

export default smoothScroll
