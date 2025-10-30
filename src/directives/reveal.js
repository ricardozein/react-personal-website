export default {
  mounted(el, binding) {
    el.classList.add('reveal')
    
    const delay = binding.value?.delay || 0
    const threshold = binding.value?.threshold || 0.15
    
    // Add staggered delay if specified
    if (delay) {
      el.style.transitionDelay = `${delay}ms`
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay before revealing to ensure smooth animation
            setTimeout(() => {
              entry.target.classList.add('in-view')
            }, 50)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '50px'
      }
    )
    
    observer.observe(el)
  }
}
