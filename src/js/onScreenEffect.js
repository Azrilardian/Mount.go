const onScreenEffect = (selector, effectName) => {
	const targets = document.querySelectorAll(selector);
	const observer = new IntersectionObserver((entries) => {
		entries.map((entry) => {
			if (!entry.isIntersecting) return entry.target.classList.remove(effectName);
			entry.target.classList.add(effectName);
			observer.unobserve(entry.target);
			return false;
		});
	});
	targets.forEach((target) => observer.observe(target));
};

export default onScreenEffect;
