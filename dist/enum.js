"use strict";
var ROLE;
(function (ROLE) {
    ROLE["SANTRI"] = "s";
    ROLE["ADMIN"] = "admin";
    ROLE["USTADZ"] = "ustadz";
    ROLE["PENGAJAR"] = "pengajar";
    ROLE["MUSRIF"] = "musrif";
    ROLE["KEPALA_SEKOLAH"] = "ks";
    ROLE["MUDIR"] = "md";
    ROLE["KETUA_YAYASAN"] = "ky";
    ROLE["BENDAHARA_SEKOLAH"] = "bs";
})(ROLE || (ROLE = {}));
const hafidzRole = ROLE.MUDIR;
console.log('hafidzRole.valueOf(): ', hafidzRole.valueOf());
if (hafidzRole.valueOf() === ROLE.SANTRI) {
    console.log('hafidz adalah seorang santri');
}
else {
    console.log('hafidz bukan seorang santri');
}
