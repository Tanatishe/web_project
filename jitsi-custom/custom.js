(function() {
    function hideBrowserWarning() {
        const selectors = [
            '#recommendedBrowsers',
            '.recommended-browsers',
            '[data-testid="recommendedBrowsers"]',
            'iframe[src*="recommendedBrowsers"]',
            '.browser-warning',
            '.unsupported-browser'
        ];
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.style.display = 'none';
                el.remove();
            });
        });
        
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            if (iframe.src && iframe.src.includes('recommendedBrowsers')) {
                iframe.style.display = 'none';
                iframe.remove();
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideBrowserWarning);
    } else {
        hideBrowserWarning();
    }
    
    setTimeout(hideBrowserWarning, 100);
    setTimeout(hideBrowserWarning, 500);
    setTimeout(hideBrowserWarning, 1000);
    
    const observer = new MutationObserver(function(mutations) {
        hideBrowserWarning();
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();

