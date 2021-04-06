const onScreenEffect = (selector, effectName, margin) => {
	const targets = document.querySelectorAll(selector);
	const entries = (entries) => {
		entries.map((entry) => {
			if (!entry.isIntersecting) return entry.target.classList.remove(effectName);
			entry.target.classList.add(effectName);
			observer.unobserve(entry.target);
			return false;
		});
	};
	const observer = new IntersectionObserver(entries, {
		rootMargin: margin,
	});
	targets.forEach((target) => observer.observe(target));
};

export default onScreenEffect;
