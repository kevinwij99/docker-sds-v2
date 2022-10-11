db.auth('admin', 'inipasswordadmin');

db.grantRolesToUser('admin', [
    {
        'role': 'dbAdminAnyDatabase',
        'db': 'admin',
    },
    {
        'role': 'readWriteAnyDatabase',
        'db': 'admin',
    },
    {
        'role': 'userAdminAnyDatabase',
        'db': 'admin',
    },
]);