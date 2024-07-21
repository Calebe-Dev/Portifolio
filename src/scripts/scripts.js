document.addEventListener('DOMContentLoaded', () => {
    const eraSelector = document.getElementById('era');
    const modeToggleButton = document.getElementById('mode-toggle-button');
    const themeLink = document.getElementById('theme-style');
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    const dots = document.querySelectorAll('.dot');
    const postSections = document.querySelectorAll('.post-section');
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');












    const eraColors = {
        modern: '#111',
        '2020s': '#cor-2020s',
        '2015s': '#cor-2015s',
        '2010s': '#cor-2010s',
        '2005s': '#cor-2005s',
        '2005Dark': '#cor-2005sDark',
        '2000s': '#cor-2000s',
        '1995s': '#cor-1995s',
        '1990s': '#cor-1990s',
        '1985s': '#cor-1985s',
        '1980s': '#cor-1980s',
        '1975s': '#cor-1975s',
        '1970s': '#cor-1970s'
    };

    function applyThemeColor(color) {
        themeColorMeta.setAttribute('content', color);
    }

    if (eraSelector) {
        eraSelector.addEventListener('change', () => {
            const selectedEra = eraSelector.value;
            let cssFile = '';
            switch (selectedEra) {
                case 'modern':
                    cssFile = './src/styles/modern.css';
                    break;
                case '2020s':
                    cssFile = './src/styles/2020s.css';
                    break;
                case '2015s':
                    cssFile = './src/styles/2015s.css';
                    break;
                case '2010s':
                    cssFile = './src/styles/2010s.css';
                    break;
                case '2005Dark':
                    cssFile = './src/styles/2005sDark.css';
                    break;
                case '2005s':
                    cssFile = './src/styles/2005s.css';
                    break;
                case '2000s':
                    cssFile = './src/styles/2000s.css';
                    break;
                case '1995s':
                    cssFile = './src/styles/1995s.css';
                    break;
                case '1990s':
                    cssFile = './src/styles/1990s.css';
                    break;
                case '1985s':
                    cssFile = './src/styles/1985s.css';
                    break;
                case '1980s':
                    cssFile = './src/styles/1980s.css';
                    break;
                case '1975s':
                    cssFile = './src/styles/1975s.css';
                    break;
                case '1970s':
                    cssFile = './src/styles/1970s.css';
                    break;
                default:
                    cssFile = './src/styles/modern.css';
            }
            themeLink.href = cssFile;
            applyThemeColor(eraColors[selectedEra] || eraColors.modern);
        });
    }

    if (modeToggleButton) {
        modeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLightMode = document.body.classList.contains('light-mode');
            themeLink.href = isLightMode ? './src/styles/light-theme.css' : './src/styles/dark-theme.css';
        });
    }

    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            const targetWidth = bar.parentElement.dataset.skillLevel;
            bar.style.width = targetWidth;
        });
    }

    function applySlideAnimation(elements, delay = 0) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay * (index + 1));
        });
    }

    const typingAnimations = document.querySelectorAll('.typing-animation');
    typingAnimations.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        for (let i = 0; i < text.length; i++) {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = text[i];
            letterSpan.style.opacity = '0';
            letterSpan.style.animationDelay = `${i * 0.1}s`;
            letterSpan.style.animation = 'fadeIn 0.5s ease forwards';
            element.appendChild(letterSpan);
        }
    });

    window.addEventListener('load', () => {
        animateProgressBars();

        const projects = document.querySelectorAll('.project');
        applySlideAnimation(projects, 200);
    });

    window.addEventListener('scroll', () => {
        const aboutText = document.querySelector('.about-text');
        if (isElementInViewport(aboutText)) {
            aboutText.style.opacity = '1';
        }
    });

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    if (postSections.length > 0 && dots.length > 0) {
        postSections[0].classList.add('active');
        dots[0].classList.add('active');
    
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                postSections.forEach(section => {
                    section.classList.remove('active');
                });
    
                dots.forEach(d => {
                    d.classList.remove('active');
                });
    
                postSections[index].classList.add('active');
                dot.classList.add('active');
            });
        });
    }

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
        });
    }

    if (modeToggleButton) {
        modeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    let currentSectionIndex = 0;

    function showSection(index) {
        postSections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    if (dots.length > 0) {
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSectionIndex = index;
                showSection(index);
            });
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentSectionIndex > 0) {
                currentSectionIndex -= 1;
                showSection(currentSectionIndex);
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentSectionIndex < postSections.length - 1) {
                currentSectionIndex += 1;
                showSection(currentSectionIndex);
            }
        });
    }

    // Inicializa a primeira seção
    showSection(currentSectionIndex);


            // Função para abrir a janela de compartilhamento
        function sharePost(platform, url, text) {
            let shareUrl = '';
            const encodedUrl = encodeURIComponent(url);
            const encodedText = encodeURIComponent(text);

            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                    break;
            }

            window.open(shareUrl, '_blank', 'width=600,height=400');
        }

        // Adiciona eventos aos botões de compartilhamento
        document.querySelectorAll('.share-btn').forEach(button => {
            button.addEventListener('click', () => {
                const platform = button.getAttribute('data-platform');
                const post = button.closest('.post');
                const postTitle = post.querySelector('.post-header h2').innerText;
                const postUrl = window.location.href + '#' + post.id;
                sharePost(platform, postUrl, postTitle);
            });
        });
});