var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdout.write('Write: os - to check operating system \n version - to check version of node\n exit - to quit\n');

process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if (input) {
        var instruction = input.toString().trim();

        switch (instruction) {
            case 'os':
                OSinfo.print();
                break;
            case 'version':
                process.stdout.write(process.version + '\n');
                break;
            case 'exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!');
        }
    }
});
