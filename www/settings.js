define([], function () {
    if (window.location.host == 'frf-todo.berekuk.ru') {
        return {
            service_name: 'FRFTD',
            instance_name: 'frf-todo'
        };
    }
    else {
        return {
            service_name: 'Play Perl',
            instance_name: 'play-perl'
        };
    }
});
