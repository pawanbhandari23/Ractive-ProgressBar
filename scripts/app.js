var ractive = new Ractive({
    el: document.body,
    template: '#template',
    data: {
        // progress bars and their data
        progressbars: [
            {name: '#Progress1', value: 0},
            {name: '#Progress2', value: 0},
            {name: '#Progress3', value: 0}
        ],
        units: [-25, -10, +10, +25]
    },
    // select and change value by increasing unit
    changeValue: function (val) {
        'use strict';  //JSLint suggestion
        var selected = this.get('selectedProgress');
        var keypath = 'progressbars[' + selected + '].value';
        var newValue = ractive.get(keypath);
        if (newValue < 0) {
            ractive.set(keypath, 0);
        }
        ractive.add(keypath, val);
    }
});
