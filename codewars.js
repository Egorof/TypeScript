"use strict";
/**
 * Supported image formats for conversion
 */
var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Png"] = "png";
    ImageFormat["Jpeg"] = "jpeg";
})(ImageFormat || (ImageFormat = {}));
/**
 * Builder class for creating image conversion configurations
 * Allows fluent interface for defining formats and resolutions
 */
class ImageBuilder {
    constructor() {
        this.formats = [];
        this.resolutions = [];
    }
    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png);
        return this;
    }
    addJpeg() {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg);
        return this;
    }
    addResolution(width, height) {
        // Validate width and height are positive numbers
        if (width <= 0 || height <= 0) {
            throw new Error("Width and height must be positive numbers");
        }
        // Check for duplicate resolutions
        const isDuplicate = this.resolutions.some(resolution => resolution.width === width && resolution.height === height);
        if (!isDuplicate) {
            this.resolutions.push({ width, height });
        }
        return this;
    }
    build() {
        const res = [];
        for (const i of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: i.width,
                    height: i.height,
                });
            }
        }
        return res;
    }
}
console.log(new ImageBuilder()
    .addJpeg()
    .addJpeg()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZXdhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2Rld2Fycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCxJQUFLLFdBR0o7QUFIRCxXQUFLLFdBQVc7SUFDZCwwQkFBVyxDQUFBO0lBQ1gsNEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFISSxXQUFXLEtBQVgsV0FBVyxRQUdmO0FBa0NEOzs7R0FHRztBQUNILE1BQU0sWUFBWTtJQUFsQjtRQUNVLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLGdCQUFXLEdBQWtCLEVBQUUsQ0FBQztJQWdEMUMsQ0FBQztJQS9DQyxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUN6QyxpREFBaUQ7UUFDakQsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVELGtDQUFrQztRQUNsQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDdkMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLEtBQUssSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FDekUsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsTUFBTSxHQUFHLEdBQXVCLEVBQUUsQ0FBQztRQUNuQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNqQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDUCxNQUFNLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7b0JBQ2QsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNO2lCQUNqQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FDVCxJQUFJLFlBQVksRUFBRTtLQUNmLE9BQU8sRUFBRTtLQUNULE9BQU8sRUFBRTtLQUNULGFBQWEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0tBQ3RCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0tBQ3ZCLEtBQUssRUFBRSxDQUNYLENBQUMifQ==