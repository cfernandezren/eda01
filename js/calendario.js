document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'Vacuna de Noviembre 1',
                start: '2020-11-22',
                end:'2020-11-22'
            },
            {
                title: 'Vacuna de Diciembre 1',
                start: '2020-12-15',
                end: '2020-12-17',

            },
            {
                title: 'Vacuna de Enero 1',
                start: '2021-01-08',
                end: '2021-01-10',

            },
            {
                title: 'Vacuna de Enero 2',
                start: '2021-01-21',
                end: '2021-01-23',

            },
            {
                title: 'Vacuna de Febrero 1',
                start: '2021-02-07',
                end: '2021-02-09',

            },
            {
                title: 'Vacuna de Marzo 1',
                start: '2021-03-01',
                end: '2021-03-01',

            },
            {
                title: 'Vacuna de Marzo 2',
                start: '2021-03-25',
                end: '2021-03-27',

            },
        ]
    }); 

    calendar.render();
  });