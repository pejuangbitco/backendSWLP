DELIMITER $$
USE `sewalapak`$$
CREATE PROCEDURE PostAddorEdit (
IN _id INT,
IN _judul_post varchar(255),
IN _status_post varchar(255),
IN _perjam varchar(255),
IN _perhari varchar(255),
IN _perbulan varchar(255),
IN _pertahun varchar(255),
IN _deskripsi_umum varchar(255),
IN _latitude FLOAT,
IN _longitude FLOAT,
IN _nama_penyedia varchar(255),
IN _alamat varchar(255),
IN _kecamatan varchar(255),
IN _kota varchar(255),
IN _provinsi varchar(255),
IN _alamatPenyedia varchar(255),
IN _kecamatanPenyedia varchar(255),
IN _kotaPenyedia varchar(255),
IN _provinsiPenyedia varchar(255),
IN _KategoriId INT,
IN _Penyedium INT,
IN _LokasiId INT,
IN _LokasiIdPenyedia INT
)

BEGIN
	IF _id = 0 THEN    
    INSERT INTO Lokasis(alamat, kecamatan, kota, provinsi, createdAt, updatedAt) VALUES (_alamat, _kecamatan, _kota, _provinsi, NOW(), NOW());

    SET _LokasiId = LAST_INSERT_ID();

    INSERT INTO Lokasis(alamat, kecamatan, kota, provinsi, createdAt, updatedAt) VALUES (_alamatPenyedia, _kecamatanPenyedia, _kotaPenyedia, _provinsiPenyedia, NOW(), NOW());

    SET _LokasiIdPenyedia = LAST_INSERT_ID();

    INSERT INTO Penyedia(nama_penyedia, LokasiId, createdAt, updatedAt) VALUES (_nama_penyedia, _LokasiIdPenyedia, NOW(), NOW());

    SET _Penyedium = LAST_INSERT_ID();

		INSERT INTO Posts(judul_post, status_post, perjam, perhari, perbulan, pertahun, deskripsi_umum, titik, KategoriId, PenyediumId, LokasiId, createdAt, updatedAt)
		VALUES ( _judul_post, _status_post, _perjam, _perhari, _perbulan, _pertahun, _deskripsi_umum, POINT(_latitude, _longitude), _KategoriId, _Penyedium, _LokasiId, NOW(), NOW());

		SET _id = LAST_INSERT_ID();
	ELSE
    UPDATE Lokasis 
    SET
    alamat = _alamatPenyedia, 
    kecamatan = _kecamatanPenyedia, 
    kota = _kotaPenyedia, 
    provinsi = _provinsiPenyedia, 
    updatedAt = NOW()
    WHERE id = _LokasiIdPenyedia;

    UPDATE Lokasis 
    SET
    alamat = _alamat, 
    kecamatan = _kecamatan, 
    kota = _kota, 
    provinsi = _provinsi, 
    updatedAt = NOW()
    WHERE id = _LokasiId;

		UPDATE Penyedia
    SET
    nama_penyedia = _nama_penyedia, 
    updatedAt = NOW()
    WHERE id = _Penyedium;

    UPDATE Posts
    SET
    judul_post = _judul_post, 
    status_post = _status_post, 
    deskripsi_umum = _deskripsi_umum,
    titik = POINT(_latitude, _longitude),
    KategoriId = _KategoriId,
    updatedAt = NOW()
    WHERE id = _id;
	END IF;

	SELECT _id AS 'id';
END$$

DELIMITER ;

CALL PostAddorEdit (
0, /* id post */
'lapak indomaret', /* judulpost */
'lengkap', /* statuspost */
'cobalengkap', /* deskripsi */
89.9, /* latitude */
88.546, /* longitude */
'syad masyhudin', /* nama penyedia */
'uin', /* alamat posting */
'husein', /* kecamatan post */
'palembang', /* kota post */
'sumsel', /* provinsi post */
'uin', /* alamat penyedia */
'husein', /* kecamatan penyedia */
'palembang', /* kota penyedia */
'sumsel', /* provinsi penyedia */
0, /* kategoriId */
0, /* PenyediaId */
0, /* LokasiIdpost */
0 /* LokasiIdPenyedia */
)