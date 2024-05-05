module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: 'html-report',
                expand: true,
                filename: 'report.html'
            }
        ]
    ]
};
