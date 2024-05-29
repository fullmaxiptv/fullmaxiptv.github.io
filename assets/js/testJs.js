document.addEventListener('DOMContentLoaded', function() {

    


    var counters = document.querySelectorAll('.counter');
    
    counters.forEach(function(counter) {
        var currentValue = 0;
        var targetValue = parseInt(counter.textContent, 10);
        var duration = 50000;
        var easing = 'swing';
        var startTime;
        
        function animateCounter(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var increment = Math.ceil((targetValue - currentValue) * progress / duration);
            currentValue += increment;
            counter.textContent = currentValue;
            
            if (progress < duration) {
                requestAnimationFrame(animateCounter);
            } else {
                counter.textContent = targetValue;
            }
        }
        
        requestAnimationFrame(animateCounter);
    });

});

