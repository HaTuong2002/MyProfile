        // Smooth scrolling animation
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.section');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                observer.observe(section);
            });

            // Add click effects to skill tags
            const skillTags = document.querySelectorAll('.skill-tag');
            skillTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1.05)';
                    }, 150);
                });
            });

            // Add hover effects to project items
            const projectItems = document.querySelectorAll('.project-item, .education-item, .experience-item');
            projectItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    this.style.borderLeftColor = '#667eea';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.borderLeftColor = '#3498db';
                });
            });

            // Typing effect for name
            const nameElement = document.querySelector('.name');
            const originalText = nameElement.textContent;
            nameElement.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    nameElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);

            // Floating animation for contact items
            const contactItems = document.querySelectorAll('.contact-item');
            contactItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.2}s`;
                item.style.animation = 'fadeInUp 0.6s ease-out forwards';
            });

            // Interactive background dots
            const header = document.querySelector('.header');
            const createDot = () => {
                const dot = document.createElement('div');
                dot.style.position = 'absolute';
                dot.style.width = '4px';
                dot.style.height = '4px';
                dot.style.background = 'rgba(255, 255, 255, 0.3)';
                dot.style.borderRadius = '50%';
                dot.style.left = Math.random() * 100 + '%';
                dot.style.top = Math.random() * 100 + '%';
                dot.style.animation = 'twinkle 2s ease-in-out infinite';
                dot.style.zIndex = '1';
                
                header.appendChild(dot);
                
                setTimeout(() => {
                    dot.remove();
                }, 2000);
            };

            // Create dots periodically
            setInterval(createDot, 300);

            // Add CSS for twinkle animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes twinkle {
                    0%, 100% { opacity: 0; transform: scale(0); }
                    50% { opacity: 1; transform: scale(1); }
                }
            `;
            document.head.appendChild(style);
        });