/* 
//* Versions manager
In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!


    vm().release(), '0.0.1', 'Default initial version';
    vm('').release(), '0.0.1', 'Default initial version';
    vm('1.2.3').release(), '1.2.3', 'No version changes';
    vm('1.2.3.4').release(), '1.2.3', 'No version changes';
    vm('1.2.3.d').release(), '1.2.3', 'No version changes';
    vm('1').release(), '1.0.0', 'Default minor version is 0';
    vm('1.1').release(), '1.1.0', 'Default patch is 0';

    vm().major().release(), '1.0.0';
    vm('1.2.3').major().release(), '2.0.0';
    vm('1.2.3').major().major().release(), '3.0.0';

    vm().minor().release(), '0.1.0';
    vm('1.2.3').minor().release(), '1.3.0';
    vm('1').minor().release(), '1.1.0';
    vm('4').minor().minor().release(), '4.2.0';

    vm().patch().release(), '0.0.2';
    vm('1.2.3').patch().release(), '1.2.4';
    vm('4').patch().patch().release(), '4.0.2';

    vm().major().rollback().release(), '0.0.1';
    vm().minor().rollback().release(), '0.0.1';
    vm().patch().rollback().release(), '0.0.1';
    vm().major().patch().rollback().release(), '1.0.0';
    vm().major().patch().rollback().major().rollback().release(), '1.0.0';
*/

class VM {
    constructor(major, minor, patch) {
        this.rollbackVersions = [];
        this.version = { major, minor, patch };
    }

    major() {
        this.updateRollbackVersion();
        this.version.major += 1;
        this.version.minor = 0;
        this.version.patch = 0;
        return this;
    }

    minor() {
        this.updateRollbackVersion();
        this.version.minor += 1;
        this.version.patch = 0;
        return this;
    }

    patch() {
        this.handleDefaultPatch();
        this.updateRollbackVersion();
        this.version.patch += 1;
        return this;
    }

    rollback() {
        if (this.rollbackVersions.length === 0)
            throw new Error('Cannot rollback!');
        this.version = this.rollbackVersions[this.rollbackVersions.length - 1];
        this.rollbackVersions.pop();
        return this;
    }

    release() {
        this.handleDefaultPatch();
        const { major, minor, patch } = this.version;
        return [major, minor, patch].join('.');
    }

    // handle default value for patch
    handleDefaultPatch() {
        if (
            this.version.major === 0 &&
            this.version.minor === 0 &&
            this.version.patch === 0
        ) {
            this.version.patch = 1;
        }
    }

    updateRollbackVersion() {
        const { major, minor, patch } = this.version;
        this.rollbackVersions.push({ major, minor, patch });
    }
}

const vm = (version = '') => {
    // default value
    version += version.trim().length === 0 ? '0.0.0' : '.0.0.0';
    let versions = version
        .split('.')
        .filter((str) => str !== '')
        .slice(0, 3);
    // handle version is not number/decimal
    versions = versions.map((v) => {
        if (Number(v) != v)
            // means the version is include chars
            throw new Error('Error occured while parsing version!');
        return Number(v);
    });

    return new VM(versions[0], versions[1], versions[2]);
};