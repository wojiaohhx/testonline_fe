'use strict';

angular.module('testonlineApp')
    .controller('dashboardCtrl', function ($scope) {
        $(function () {
            $('#ability-reading-pie').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '阅读能力'
                },
                tooltip: {
            	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '百分比',
                    data: [
                        ['错误率',   24.2],
                        {
                            name: '正确率',
                            y: 75.8,
                            sliced: true,
                            selected: true
                        }
                    ]
                }]
            });
        });

        $(function () {
            $('#ability-math-pie').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: '数学能力'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: '百分比',
                    data: [
                        ['错误率',   37.2],
                        {
                            name: '正确率',
                            y: 62.8,
                            sliced: true,
                            selected: true
                        }
                    ]
                }]
            });
        });

        $(function () {
            $('#ability-reading-line').highcharts({
                title: {
                    text: '阅读对比',
                    x: -20 //center
                },
                xAxis: {
                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                },
                yAxis: {
                    title: {
                        text: '阅读得分 (满分100)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: '阅读',
                    data: [92, 73, 69, 72, 83, 62, 88, 94, 90, 83]
                }]
            });
        });

        $(function () {
            $('#ability-math-line').highcharts({
                title: {
                    text: '数学对比',
                    x: -20 //center
                },
                xAxis: {
                    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                },
                yAxis: {
                    title: {
                        text: '数学得分 (满分100)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: '数学',
                    data: [72, 83, 79, 82, 89, 66, 68, 74, 80, 89]
                }]
            });
        });


    });
