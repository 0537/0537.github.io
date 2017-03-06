$(window).load(function(){
   
    
    
    function showDrive(){
        
    
    $('.test-drive-content').animate({
        marginTop: '300px'
    }, 500, function(){
        
        jQuery(window).trigger('resize');
        
        $('.test-drive-content').addClass('show');
        
        var ctx = document.getElementById('bg-block').getContext("2d");
        var gradient = ctx.createLinearGradient(0, 0, 0, 400);
        var gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#e3e3e3');   
        gradient2.addColorStop(0, '#eaeaea');   
        var items = [
            {dat: 58, visits: 0, info: 'Визитов'},
            {dat: 64, visits: 12000, info: 'Визитов'},
            {dat: 58, visits: 0, info: 'Визитов'},
            {dat: 65, visits: 14287, info: 'Визитов'},
            {dat: 85, visits: 0, info: 'Визитов'},
            {dat: 95, visits: 18459, info: 'Визитов'},
            {dat: 87, visits: 0, info: 'Визитов'}
        ];
        arr_data = [];
        arr_tmp = [];
        items.forEach(function(item, index){
            arr_data.push(item.dat);
            arr_tmp.push('');
        });
        var items2 = [
            {dat: 80, visits: 0, info: 'Визитов'},
            {dat: 83, visits: 12000, info: 'Визитов'},
            {dat: 75, visits: 0, info: 'Визитов'},
            {dat: 85, visits: 14287, info: 'Визитов'},
            {dat: 82, visits: 0, info: 'Визитов'},
            {dat: 90, visits: 18459, info: 'Визитов'},
            {dat: 95, visits: 0, info: 'Визитов'}
        ];
        arr_data2 = [];
        arr_tmp2 = [];
        items2.forEach(function(item, index){
            arr_data2.push(item.dat);
            arr_tmp2.push('');
        });
        var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
        var lineChartData = {
            labels :  arr_tmp,
            datasets : [
                {
                    label: "",
                    fillColor : gradient2,
                    strokeColor : "rgba(249, 175, 10, 0)",
                    pointColor : "rgba(255,255,255,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(0,0,0,1)",
                    data : arr_data2
                },
                {
                    label: "",
                    fillColor : gradient,
                    strokeColor : "rgba(249, 175, 10, 0)",
                    pointColor : "rgba(255,255,255,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(0,0,0,1)",
                    data : arr_data
                }

            ]

        }

        var count = 0;
        new Chart(ctx).Line(lineChartData, {
            showTooltips: true,
            tooltipEvents: [],
            scaleBeginAtZero: true,
            pointDotRadius: 0,
            scaleShowLabels:false, 
            animationSteps : 100,
            fontColor: '#000',
            scaleLineColor: 'rgba(0, 0, 0, 0)',
            scaleShowVerticalLines: false,
            scaleShowHorizontalLines: false
        }); 
    });
    
    
    
    }
    
    var flagShow = 1;
    
    $(document).scroll(function(){
        
        if($('.test-drive-content').length && flagShow && $(document).scrollTop() >= $('.test-drive-content').offset().top - 400 && $(window).width() >= 992)
        {
            flagShow = 0;
            showDrive();
        }
    });
});
