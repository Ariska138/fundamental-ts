enum ROLE {
  SANTRI = "s",
  ADMIN = "admin",
  USTADZ = "ustadz",
  PENGAJAR = "pengajar",
  MUSRIF = "musrif",
  KEPALA_SEKOLAH = "ks",
  MUDIR = "md",
  KETUA_YAYASAN = "ky",
  BENDAHARA_SEKOLAH = "bs"
}

const hafidzRole = ROLE.MUDIR;

console.log('hafidzRole.valueOf(): ', hafidzRole.valueOf());


if (hafidzRole.valueOf() === ROLE.SANTRI) {
  console.log('hafidz adalah seorang santri');
} else {
  console.log('hafidz bukan seorang santri');
}

