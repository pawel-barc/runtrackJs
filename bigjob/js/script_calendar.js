document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        selectable: true,
        select: function(info) {
            const selectedDate = info.start;
            const today = new Date();
            const isWeekend = [0, 6].includes(selectedDate.getDay());

            if (selectedDate < today && !isWeekend) {
                alert("Sélectionnez une date à partir d'aujourd'hui.");
                calendar.unselect();
                return;
            } else if (isWeekend) {
                alert("Pas de possibilité de choisir les jours de week-end.");
                calendar.unselect();
                return;
            }
            $('#addEventModal').modal('show');
            $('#eventStart, #eventEnd').val(info.startStr);
        },
    });

    calendar.render();

    $('#eventForm').submit(function(event) {
        event.preventDefault();
        const title = $('#eventTitle').val();
        const start = $('#eventStart').val();
        const end = $('#eventEnd').val();
        calendar.addEvent({ title, start, end });
        $('#addEventModal').modal('hide');
    });
});
