import { t as __commonJSMin } from "../_runtime.mjs";
//#region node_modules/exif-component/js/ExifReader.js
var require_ExifReader = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		(typeof exports !== "undefined" && exports !== null ? exports : this).ExifReader = (function() {
			ExifReader.prototype._MIN_DATA_BUFFER_LENGTH = 2;
			ExifReader.prototype._JPEG_ID_SIZE = 2;
			ExifReader.prototype._JPEG_ID = 65496;
			ExifReader.prototype._APP_MARKER_SIZE = 2;
			ExifReader.prototype._APP0_MARKER = 65504;
			ExifReader.prototype._APP1_MARKER = 65505;
			ExifReader.prototype._APP15_MARKER = 65519;
			ExifReader.prototype._APP_ID_OFFSET = 4;
			ExifReader.prototype._BYTES_Exif = 1165519206;
			ExifReader.prototype._TIFF_HEADER_OFFSET = 10;
			ExifReader.prototype._BYTE_ORDER_BIG_ENDIAN = 18761;
			ExifReader.prototype._BYTE_ORDER_LITTLE_ENDIAN = 19789;
			function ExifReader() {
				var _this = this;
				this._getTagValueAt = {
					1: function(offset) {
						return _this._getByteAt(offset);
					},
					2: function(offset) {
						return _this._getAsciiAt(offset);
					},
					3: function(offset) {
						return _this._getShortAt(offset);
					},
					4: function(offset) {
						return _this._getLongAt(offset);
					},
					5: function(offset) {
						return _this._getRationalAt(offset);
					},
					7: function(offset) {
						return _this._getUndefinedAt(offset);
					},
					9: function(offset) {
						return _this._getSlongAt(offset);
					},
					10: function(offset) {
						return _this._getSrationalAt(offset);
					}
				};
				this._tiffHeaderOffset = 0;
			}
			ExifReader.prototype.load = function(data) {
				return this.loadView(new DataView(data));
			};
			ExifReader.prototype.loadView = function(_dataView) {
				this._dataView = _dataView;
				this._tags = {};
				this._checkImageHeader();
				return this._readTags();
			};
			ExifReader.prototype._checkImageHeader = function() {
				var dataView = this._dataView;
				if (dataView.byteLength < this._MIN_DATA_BUFFER_LENGTH || dataView.getUint16(0, false) !== this._JPEG_ID) throw new Error("Invalid image format");
				this._parseAppMarkers(dataView);
				if (!this._hasExifData()) throw new Error("No Exif data");
			};
			ExifReader.prototype._parseAppMarkers = function(dataView) {
				var appMarkerPosition = this._JPEG_ID_SIZE, fieldLength, _results = [];
				while (true) {
					if (dataView.byteLength < appMarkerPosition + this._APP_ID_OFFSET + 5) break;
					if (this._isApp1ExifMarker(dataView, appMarkerPosition)) {
						fieldLength = dataView.getUint16(appMarkerPosition + this._APP_MARKER_SIZE, false);
						this._tiffHeaderOffset = appMarkerPosition + this._TIFF_HEADER_OFFSET;
					} else if (this._isAppMarker(dataView, appMarkerPosition)) fieldLength = dataView.getUint16(appMarkerPosition + this._APP_MARKER_SIZE, false);
					else break;
					_results.push(appMarkerPosition += this._APP_MARKER_SIZE + fieldLength);
				}
				return _results;
			};
			ExifReader.prototype._isApp1ExifMarker = function(dataView, appMarkerPosition) {
				return dataView.getUint16(appMarkerPosition, false) === this._APP1_MARKER && dataView.getUint32(appMarkerPosition + this._APP_ID_OFFSET, false) === this._BYTES_Exif && dataView.getUint8(appMarkerPosition + this._APP_ID_OFFSET + 4, false) === 0;
			};
			ExifReader.prototype._isAppMarker = function(dataView, appMarkerPosition) {
				var appMarker = dataView.getUint16(appMarkerPosition, false);
				return appMarker >= this._APP0_MARKER && appMarker <= this._APP15_MARKER;
			};
			ExifReader.prototype._hasExifData = function() {
				return this._tiffHeaderOffset !== 0;
			};
			ExifReader.prototype._readTags = function() {
				this._setByteOrder();
				this._read0thIfd();
				this._readExifIfd();
				this._readGpsIfd();
				return this._readInteroperabilityIfd();
			};
			ExifReader.prototype._setByteOrder = function() {
				if (this._dataView.getUint16(this._tiffHeaderOffset) === this._BYTE_ORDER_BIG_ENDIAN) return this._littleEndian = true;
				else if (this._dataView.getUint16(this._tiffHeaderOffset) === this._BYTE_ORDER_LITTLE_ENDIAN) return this._littleEndian = false;
				else throw new Error("Illegal byte order value. Faulty image.");
			};
			ExifReader.prototype._read0thIfd = function() {
				var ifdOffset = this._getIfdOffset();
				return this._readIfd("0th", ifdOffset);
			};
			ExifReader.prototype._getIfdOffset = function() {
				return this._tiffHeaderOffset + this._getLongAt(this._tiffHeaderOffset + 4);
			};
			ExifReader.prototype._readExifIfd = function() {
				var ifdOffset;
				if (this._tags["Exif IFD Pointer"] != null) {
					ifdOffset = this._tiffHeaderOffset + this._tags["Exif IFD Pointer"].value;
					return this._readIfd("exif", ifdOffset);
				}
			};
			ExifReader.prototype._readGpsIfd = function() {
				var ifdOffset;
				if (this._tags["GPS Info IFD Pointer"] != null) {
					ifdOffset = this._tiffHeaderOffset + this._tags["GPS Info IFD Pointer"].value;
					return this._readIfd("gps", ifdOffset);
				}
			};
			ExifReader.prototype._readInteroperabilityIfd = function() {
				var ifdOffset;
				if (this._tags["Interoperability IFD Pointer"] != null) {
					ifdOffset = this._tiffHeaderOffset + this._tags["Interoperability IFD Pointer"].value;
					return this._readIfd("interoperability", ifdOffset);
				}
			};
			ExifReader.prototype._readIfd = function(ifdType, offset) {
				var numberOfFields = this._getShortAt(offset), tag, _i, _results;
				offset += 2;
				_results = [];
				for (_i = 0; 0 <= numberOfFields ? _i < numberOfFields : _i > numberOfFields; 0 <= numberOfFields ? ++_i : --_i) {
					tag = this._readTag(ifdType, offset);
					this._tags[tag.name] = {
						"value": tag.value,
						"description": tag.description
					};
					_results.push(offset += 12);
				}
				return _results;
			};
			ExifReader.prototype._readTag = function(ifdType, offset) {
				var tagCode = this._getShortAt(offset), tagCount, tagDescription, tagName, tagType = this._getShortAt(offset + 2), tagValue, tagValueOffset;
				tagCount = this._getLongAt(offset + 4);
				if (this._typeSizes[tagType] * tagCount <= 4) tagValue = this._getTagValue(offset + 8, tagType, tagCount);
				else {
					tagValueOffset = this._getLongAt(offset + 8);
					tagValue = this._getTagValue(this._tiffHeaderOffset + tagValueOffset, tagType, tagCount);
				}
				if (tagType === this._tagTypes["ASCII"]) tagValue = this._splitNullSeparatedAsciiString(tagValue);
				if (this._tagNames[ifdType][tagCode] != null) {
					if (this._tagNames[ifdType][tagCode]["name"] != null && this._tagNames[ifdType][tagCode]["description"] != null) {
						tagName = this._tagNames[ifdType][tagCode]["name"];
						tagDescription = this._tagNames[ifdType][tagCode]["description"](tagValue);
					} else {
						tagName = this._tagNames[ifdType][tagCode];
						if (tagValue instanceof Array) tagDescription = tagValue.join(", ");
						else tagDescription = tagValue;
					}
					return {
						"name": tagName,
						"value": tagValue,
						"description": tagDescription
					};
				} else return {
					"name": "undefined-" + tagCode,
					"value": tagValue,
					"description": tagValue
				};
			};
			ExifReader.prototype._getTagValue = function(offset, type, count) {
				var tagValue, value = (function() {
					var _i, _results = [];
					for (_i = 0; 0 <= count ? _i < count : _i > count; 0 <= count ? ++_i : --_i) {
						tagValue = this._getTagValueAt[type](offset);
						offset += this._typeSizes[type];
						_results.push(tagValue);
					}
					return _results;
				}).call(this);
				if (value.length === 1) value = value[0];
				else if (type === this._tagTypes["ASCII"]) value = this._getAsciiValue(value);
				return value;
			};
			ExifReader.prototype._getAsciiValue = function(charArray) {
				var charCode;
				return (function() {
					var _i, _len, _results = [];
					for (_i = 0, _len = charArray.length; _i < _len; _i++) {
						charCode = charArray[_i];
						_results.push(String.fromCharCode(charCode));
					}
					return _results;
				})();
			};
			ExifReader.prototype._getByteAt = function(offset) {
				return this._dataView.getUint8(offset);
			};
			ExifReader.prototype._getAsciiAt = function(offset) {
				return this._dataView.getUint8(offset);
			};
			ExifReader.prototype._getShortAt = function(offset) {
				return this._dataView.getUint16(offset, this._littleEndian);
			};
			ExifReader.prototype._getLongAt = function(offset) {
				return this._dataView.getUint32(offset, this._littleEndian);
			};
			ExifReader.prototype._getRationalAt = function(offset) {
				return this._getLongAt(offset) / this._getLongAt(offset + 4);
			};
			ExifReader.prototype._getUndefinedAt = function(offset) {
				return this._getByteAt(offset);
			};
			ExifReader.prototype._getSlongAt = function(offset) {
				return this._dataView.getInt32(offset, this._littleEndian);
			};
			ExifReader.prototype._getSrationalAt = function(offset) {
				return this._getSlongAt(offset) / this._getSlongAt(offset + 4);
			};
			ExifReader.prototype._splitNullSeparatedAsciiString = function(string) {
				var character, i, tagValue = [], _i, _len;
				i = 0;
				for (_i = 0, _len = string.length; _i < _len; _i++) {
					character = string[_i];
					if (character === "\0") {
						i++;
						continue;
					}
					if (tagValue[i] == null) tagValue[i] = "";
					tagValue[i] += character;
				}
				return tagValue;
			};
			ExifReader.prototype._typeSizes = {
				1: 1,
				2: 1,
				3: 2,
				4: 4,
				5: 8,
				7: 1,
				9: 4,
				10: 8
			};
			ExifReader.prototype._tagTypes = {
				"BYTE": 1,
				"ASCII": 2,
				"SHORT": 3,
				"LONG": 4,
				"RATIONAL": 5,
				"UNDEFINED": 7,
				"SLONG": 9,
				"SRATIONAL": 10
			};
			ExifReader.prototype._tagNames = {
				"0th": {
					256: "ImageWidth",
					257: "ImageLength",
					258: "BitsPerSample",
					259: "Compression",
					262: "PhotometricInterpretation",
					270: "ImageDescription",
					271: "Make",
					272: "Model",
					273: "StripOffsets",
					274: {
						"name": "Orientation",
						"description": function(value) {
							switch (value) {
								case 1: return "top-left";
								case 2: return "top-right";
								case 3: return "bottom-right";
								case 4: return "bottom-left";
								case 5: return "left-top";
								case 6: return "right-top";
								case 7: return "right-bottom";
								case 8: return "left-bottom";
								default: return "Undefined";
							}
						}
					},
					277: "SamplesPerPixel",
					278: "RowsPerStrip",
					279: "StripByteCounts",
					282: "XResolution",
					283: "YResolution",
					284: "PlanarConfiguration",
					296: {
						"name": "ResolutionUnit",
						"description": function(value) {
							switch (value) {
								case 2: return "inches";
								case 3: return "centimeters";
								default: return "Unknown";
							}
						}
					},
					301: "TransferFunction",
					305: "Software",
					306: "DateTime",
					315: "Artist",
					318: "WhitePoint",
					319: "PrimaryChromaticities",
					513: "JPEGInterchangeFormat",
					514: "JPEGInterchangeFormatLength",
					529: "YCbCrCoefficients",
					530: "YCbCrSubSampling",
					531: {
						"name": "YCbCrPositioning",
						"description": function(value) {
							switch (value) {
								case 1: return "centered";
								case 2: return "co-sited";
								default: return "undefied " + value;
							}
						}
					},
					532: "ReferenceBlackWhite",
					33432: {
						"name": "Copyright",
						"description": function(value) {
							return value.join("; ");
						}
					},
					34665: "Exif IFD Pointer",
					34853: "GPS Info IFD Pointer"
				},
				"exif": {
					33434: "ExposureTime",
					33437: "FNumber",
					34850: {
						"name": "ExposureProgram",
						"description": function(value) {
							switch (value) {
								case 0: return "Undefined";
								case 1: return "Manual";
								case 2: return "Normal program";
								case 3: return "Aperture priority";
								case 4: return "Shutter priority";
								case 5: return "Creative program";
								case 6: return "Action program";
								case 7: return "Portrait mode";
								case 8: return "Landscape mode";
								default: return "Unknown";
							}
						}
					},
					34852: "SpectralSensitivity",
					34855: "ISOSpeedRatings",
					34856: {
						"name": "OECF",
						"description": function(value) {
							return "[Raw OECF table data]";
						}
					},
					36864: {
						"name": "ExifVersion",
						"description": function(value) {
							var charCode, string = "", _i, _len;
							for (_i = 0, _len = value.length; _i < _len; _i++) {
								charCode = value[_i];
								string += String.fromCharCode(charCode);
							}
							return string;
						}
					},
					36867: "DateTimeOriginal",
					36868: "DateTimeDigitized",
					37121: {
						"name": "ComponentsConfiguration",
						"description": function(value) {
							var character, string = "", _i, _len;
							for (_i = 0, _len = value.length; _i < _len; _i++) {
								character = value[_i];
								switch (character) {
									case 49:
										string += "Y";
										break;
									case 50:
										string += "Cb";
										break;
									case 51:
										string += "Cr";
										break;
									case 52:
										string += "R";
										break;
									case 53:
										string += "G";
										break;
									case 54: string += "B";
								}
							}
							return string;
						}
					},
					37122: "CompressedBitsPerPixel",
					37377: "ShutterSpeedValue",
					37378: "ApertureValue",
					37379: "BrightnessValue",
					37380: "ExposureBiasValue",
					37381: "MaxApertureValue",
					37382: "SubjectDistance",
					37383: {
						"name": "MeteringMode",
						"description": function(value) {
							switch (value) {
								case 1: return "Average";
								case 2: return "CenterWeightedAverage";
								case 3: return "Spot";
								case 4: return "MultiSpot";
								case 5: return "Pattern";
								case 6: return "Partial";
								case 255: return "Other";
								default: return "Unknown";
							}
						}
					},
					37384: {
						"name": "LightSource",
						"description": function(value) {
							switch (value) {
								case 1: return "Daylight";
								case 2: return "Fluorescent";
								case 3: return "Tungsten (incandescent light)";
								case 4: return "Flash";
								case 9: return "Fine weather";
								case 10: return "Cloudy weather";
								case 11: return "Shade";
								case 12: return "Daylight fluorescent (D 5700 – 7100K)";
								case 13: return "Day white fluorescent (N 4600 – 5400K)";
								case 14: return "Cool white fluorescent (W 3900 – 4500K)";
								case 15: return "White fluorescent (WW 3200 – 3700K)";
								case 17: return "Standard light A";
								case 18: return "Standard light B";
								case 19: return "Standard light C";
								case 20: return "D55";
								case 21: return "D65";
								case 22: return "D75";
								case 23: return "D50";
								case 24: return "ISO studio tungsten";
								case 255: return "Other light source";
								default: return "Unknown";
							}
						}
					},
					37385: {
						"name": "Flash",
						"description": function(value) {
							switch (value) {
								case 0: return "Flash did not fire";
								case 1: return "Flash fired";
								case 5: return "Strobe return light not detected";
								case 7: return "Strobe return light detected";
								case 9: return "Flash fired, compulsory flash mode";
								case 13: return "Flash fired, compulsory flash mode, return light not detected";
								case 15: return "Flash fired, compulsory flash mode, return light detected";
								case 16: return "Flash did not fire, compulsory flash mode";
								case 24: return "Flash did not fire, auto mode";
								case 25: return "Flash fired, auto mode";
								case 29: return "Flash fired, auto mode, return light not detected";
								case 31: return "Flash fired, auto mode, return light detected";
								case 32: return "No flash function";
								case 65: return "Flash fired, red-eye reduction mode";
								case 69: return "Flash fired, red-eye reduction mode, return light not detected";
								case 71: return "Flash fired, red-eye reduction mode, return light detected";
								case 73: return "Flash fired, compulsory flash mode, red-eye reduction mode";
								case 77: return "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected";
								case 79: return "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected";
								case 89: return "Flash fired, auto mode, red-eye reduction mode";
								case 93: return "Flash fired, auto mode, return light not detected, red-eye reduction mode";
								case 95: return "Flash fired, auto mode, return light detected, red-eye reduction mode";
								default: return "Unknown";
							}
						}
					},
					37386: "FocalLength",
					37396: {
						"name": "SubjectArea",
						"description": function(value) {
							switch (value.length) {
								case 2: return "Location; X: " + value[0] + ", Y: " + value[1];
								case 3: return "Circle; X: " + value[0] + ", Y: " + value[1] + ", diameter: " + value[2];
								case 4: return "Rectangle; X: " + value[0] + ", Y: " + value[1] + ", width: " + value[2] + ", height: " + value[3];
								default: return "Unknown";
							}
						}
					},
					37500: {
						"name": "MakerNote",
						"description": function(value) {
							return "[Raw maker note data]";
						}
					},
					37510: {
						"name": "UserComment",
						"description": function(value) {
							switch (value.slice(0, 8).map(function(charCode) {
								return String.fromCharCode(charCode);
							}).join("")) {
								case "ASCII\0\0\0": return value.slice(8, value.length).map(function(charCode) {
									return String.fromCharCode(charCode);
								}).join("");
								case "JIS\0\0\0\0\0": return "[JIS encoded text]";
								case "UNICODE\0": return "[Unicode encoded text]";
								case "\0\0\0\0\0\0\0\0": return "[Undefined encoding]";
							}
						}
					},
					37520: "SubSecTime",
					37521: "SubSecTimeOriginal",
					37522: "SubSecTimeDigitized",
					40960: {
						"name": "FlashpixVersion",
						"description": function(value) {
							var charCode, string = "", _i, _len;
							for (_i = 0, _len = value.length; _i < _len; _i++) {
								charCode = value[_i];
								string += String.fromCharCode(charCode);
							}
							return string;
						}
					},
					40961: {
						"name": "ColorSpace",
						"description": function(value) {
							switch (value) {
								case 1: return "sRGB";
								case 65535: return "Uncalibrated";
								default: return "Unknown";
							}
						}
					},
					40962: "PixelXDimension",
					40963: "PixelYDimension",
					40964: "RelatedSoundFile",
					40965: "Interoperability IFD Pointer",
					41483: "FlashEnergy",
					41484: {
						"name": "SpatialFrequencyResponse",
						"description": function(value) {
							return "[Raw SFR table data]";
						}
					},
					41486: "FocalPlaneXResolution",
					41487: "FocalPlaneYResolution",
					41488: {
						"name": "FocalPlaneResolutionUnit",
						"description": function(value) {
							switch (value) {
								case 2: return "inches";
								case 3: return "centimeters";
								default: return "Unknown";
							}
						}
					},
					41492: {
						"name": "SubjectLocation",
						"description": function(value) {
							return "X: " + value[0] + ", Y: " + value[1];
						}
					},
					41493: "ExposureIndex",
					41495: {
						"name": "SensingMethod",
						"description": function(value) {
							switch (value) {
								case 1: return "Undefined";
								case 2: return "One-chip color area sensor";
								case 3: return "Two-chip color area sensor";
								case 4: return "Three-chip color area sensor";
								case 5: return "Color sequential area sensor";
								case 7: return "Trilinear sensor";
								case 8: return "Color sequential linear sensor";
								default: return "Unknown";
							}
						}
					},
					41728: {
						"name": "FileSource",
						"description": function(value) {
							switch (value) {
								case 3: return "DSC";
								default: return "Unknown";
							}
						}
					},
					41729: {
						"name": "SceneType",
						"description": function(value) {
							switch (value) {
								case 1: return "A directly photographed image";
								default: return "Unknown";
							}
						}
					},
					41730: {
						"name": "CFAPattern",
						"description": function(value) {
							return "[Raw CFA pattern table data]";
						}
					},
					41985: {
						"name": "CustomRendered",
						"description": function(value) {
							switch (value) {
								case 0: return "Normal process";
								case 1: return "Custom process";
								default: return "Unknown";
							}
						}
					},
					41986: {
						"name": "ExposureMode",
						"description": function(value) {
							switch (value) {
								case 0: return "Auto exposure";
								case 1: return "Manual exposure";
								case 2: return "Auto bracket";
								default: return "Unknown";
							}
						}
					},
					41987: {
						"name": "WhiteBalance",
						"description": function(value) {
							switch (value) {
								case 0: return "Auto white balance";
								case 1: return "Manual white balance";
								default: return "Unknown";
							}
						}
					},
					41988: {
						"name": "DigitalZoomRatio",
						"description": function(value) {
							switch (value) {
								case 0: return "Digital zoom was not used";
								default: return value;
							}
						}
					},
					41989: {
						"name": "FocalLengthIn35mmFilm",
						"description": function(value) {
							switch (value) {
								case 0: return "Unknown";
								default: return value;
							}
						}
					},
					41990: {
						"name": "SceneCaptureType",
						"description": function(value) {
							switch (value) {
								case 0: return "Standard";
								case 1: return "Landscape";
								case 2: return "Portrait";
								case 3: return "Night scene";
								default: return "Unknown";
							}
						}
					},
					41991: {
						"name": "GainControl",
						"description": function(value) {
							switch (value) {
								case 0: return "None";
								case 1: return "Low gain up";
								case 2: return "High gain up";
								case 3: return "Low gain down";
								case 4: return "High gain down";
								default: return "Unknown";
							}
						}
					},
					41992: {
						"name": "Contrast",
						"description": function(value) {
							switch (value) {
								case 0: return "Normal";
								case 1: return "Soft";
								case 2: return "Hard";
								default: return "Unknown";
							}
						}
					},
					41993: {
						"name": "Saturation",
						"description": function(value) {
							switch (value) {
								case 0: return "Normal";
								case 1: return "Low saturation";
								case 2: return "High saturation";
								default: return "Unknown";
							}
						}
					},
					41994: {
						"name": "Sharpness",
						"description": function(value) {
							switch (value) {
								case 0: return "Normal";
								case 1: return "Soft";
								case 2: return "Hard";
								default: return "Unknown";
							}
						}
					},
					41995: {
						"name": "DeviceSettingDescription",
						"description": function(value) {
							return "[Raw device settings table data]";
						}
					},
					41996: {
						"name": "SubjectDistanceRange",
						"description": function(value) {
							switch (value) {
								case 1: return "Macro";
								case 2: return "Close view";
								case 3: return "Distant view";
								default: return "Unknown";
							}
						}
					},
					42016: "ImageUniqueID"
				},
				"gps": {
					0: {
						"name": "GPSVersionID",
						"description": function(value) {
							var _ref, _ref1;
							if (value[0] === (_ref = value[1]) && _ref === 2 && value[2] === (_ref1 = value[3]) && _ref1 === 0) return "Version 2.2";
							else return "Unknown";
						}
					},
					1: {
						"name": "GPSLatitudeRef",
						"description": function(value) {
							switch (value.join("")) {
								case "N": return "North latitude";
								case "S": return "South latitude";
								default: return "Unknown";
							}
						}
					},
					2: {
						"name": "GPSLatitude",
						"description": function(value) {
							return value[0] + value[1] / 60 + value[2] / 3600;
						}
					},
					3: {
						"name": "GPSLongitudeRef",
						"description": function(value) {
							switch (value.join("")) {
								case "E": return "East longitude";
								case "W": return "West longitude";
								default: return "Unknown";
							}
						}
					},
					4: {
						"name": "GPSLongitude",
						"description": function(value) {
							return value[0] + value[1] / 60 + value[2] / 3600;
						}
					},
					5: {
						"name": "GPSAltitudeRef",
						"description": function(value) {
							switch (value) {
								case 0: return "Sea level";
								case 1: return "Sea level reference (negative value)";
								default: return "Unknown";
							}
						}
					},
					6: {
						"name": "GPSAltitude",
						"description": function(value) {
							return value + " m";
						}
					},
					7: {
						"name": "GPSTimeStamp",
						"description": function(value) {
							var padZero = function(num) {
								return (function() {
									var _i, _ref, _results = [];
									for (_i = 0, _ref = 2 - ("" + Math.floor(num)).length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? ++_i : --_i) _results.push("0");
									return _results;
								})() + num;
							};
							return value.map(padZero).join(":");
						}
					},
					8: "GPSSatellites",
					9: {
						"name": "GPSStatus",
						"description": function(value) {
							switch (value.join("")) {
								case "A": return "Measurement in progress";
								case "V": return "Measurement Interoperability";
								default: return "Unknown";
							}
						}
					},
					10: {
						"name": "GPSMeasureMode",
						"description": function(value) {
							switch (value.join("")) {
								case "2": return "2-dimensional measurement";
								case "3": return "3-dimensional measurement";
								default: return "Unknown";
							}
						}
					},
					11: "GPSDOP",
					12: {
						"name": "GPSSpeedRef",
						"description": function(value) {
							switch (value.join("")) {
								case "K": return "Kilometers per hour";
								case "M": return "Miles per hour";
								case "N": return "Knots";
								default: return "Unknown";
							}
						}
					},
					13: "GPSSpeed",
					14: {
						"name": "GPSTrackRef",
						"description": function(value) {
							switch (value.join("")) {
								case "T": return "True direction";
								case "M": return "Magnetic direction";
								default: return "Unknown";
							}
						}
					},
					15: "GPSTrack",
					16: {
						"name": "GPSImgDirectionRef",
						"description": function(value) {
							switch (value.join("")) {
								case "T": return "True direction";
								case "M": return "Magnetic direction";
								default: return "Unknown";
							}
						}
					},
					17: "GPSImgDirection",
					18: "GPSMapDatum",
					19: {
						"name": "GPSDestLatitudeRef",
						"description": function(value) {
							switch (value.join("")) {
								case "N": return "North latitude";
								case "S": return "South latitude";
								default: return "Unknown";
							}
						}
					},
					20: {
						"name": "GPSDestLatitude",
						"description": function(value) {
							return value[0] + value[1] / 60 + value[2] / 3600;
						}
					},
					21: {
						"name": "GPSDestLongitudeRef",
						"description": function(value) {
							switch (value.join("")) {
								case "E": return "East longitude";
								case "W": return "West longitude";
								default: return "Unknown";
							}
						}
					},
					22: {
						"name": "GPSDestLongitude",
						"description": function(value) {
							return value[0] + value[1] / 60 + value[2] / 3600;
						}
					},
					23: {
						"name": "GPSDestBearingRef",
						"description": function(value) {
							switch (value.join("")) {
								case "T": return "True direction";
								case "M": return "Magnetic direction";
								default: return "Unknown";
							}
						}
					},
					24: "GPSDestBearing",
					25: {
						"name": "GPSDestDistanceRef",
						"description": function(value) {
							switch (value.join("")) {
								case "K": return "Kilometers";
								case "M": return "Miles";
								case "N": return "Knots";
								default: return "Unknown";
							}
						}
					},
					26: "GPSDestDistance",
					27: {
						"name": "GPSProcessingMethod",
						"description": function(value) {
							switch (value.slice(0, 8).map(function(charCode) {
								return String.fromCharCode(charCode);
							}).join("")) {
								case "ASCII\0\0\0": return value.slice(8, value.length).map(function(charCode) {
									return String.fromCharCode(charCode);
								}).join("");
								case "JIS\0\0\0\0\0": return "[JIS encoded text]";
								case "UNICODE\0": return "[Unicode encoded text]";
								case "\0\0\0\0\0\0\0\0": return "[Undefined encoding]";
							}
						}
					},
					28: {
						"name": "GPSAreaInformation",
						"description": function(value) {
							switch (value.slice(0, 8).map(function(charCode) {
								return String.fromCharCode(charCode);
							}).join("")) {
								case "ASCII\0\0\0": return value.slice(8, value.length).map(function(charCode) {
									return String.fromCharCode(charCode);
								}).join("");
								case "JIS\0\0\0\0\0": return "[JIS encoded text]";
								case "UNICODE\0": return "[Unicode encoded text]";
								case "\0\0\0\0\0\0\0\0": return "[Undefined encoding]";
							}
						}
					},
					29: "GPSDateStamp",
					30: {
						"name": "GPSDifferential",
						"description": function(value) {
							switch (value) {
								case 0: return "Measurement without differential correction";
								case 1: return "Differential correction applied";
								default: return "Unknown";
							}
						}
					}
				},
				"interoperability": {
					1: "InteroperabilityIndex",
					2: "UnknownInteroperabilityTag0x0002",
					4097: "UnknownInteroperabilityTag0x1001",
					4098: "UnknownInteroperabilityTag0x1002"
				}
			};
			ExifReader.prototype.getTagValue = function(name) {
				if (this._tags[name] != null) return this._tags[name].value;
				else return;
			};
			ExifReader.prototype.getTagDescription = function(name) {
				if (this._tags[name] != null) return this._tags[name].description;
				else return;
			};
			ExifReader.prototype.getAllTags = function() {
				return this._tags;
			};
			return ExifReader;
		})();
	}).call(exports);
}));
//#endregion
//#region node_modules/exif-component/index.js
var require_exif_component = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module dependencies.
	*/
	var ExifReader = require_ExifReader().ExifReader;
	/**
	* Parse EXIF tags in `buf`.
	*
	* @param {ArrayBuffer} buf
	* @return {Object}
	* @api public
	*/
	module.exports = function(buf) {
		var exif = new ExifReader();
		exif.load(buf);
		var tags = exif.getAllTags();
		var out = {};
		for (var tag in tags) out[spaces(tag)] = tags[tag].description;
		return out;
	};
	/**
	* Convert camel-case to lowercase words
	*
	* @param {String} str
	* @return {String}
	* @api private
	*/
	function spaces(str) {
		return str.replace(/([A-Z][a-z])|([a-z][A-Z])|([A-Z])/g, function(m) {
			return 1 == m.length ? m.toLowerCase() : m[0] == m[0].toUpperCase() ? " " + m.toLowerCase() : m[0] + " " + m[1].toLowerCase();
		}).replace(/^\s+|\s+$/g, "");
	}
}));
//#endregion
export { require_exif_component as t };
