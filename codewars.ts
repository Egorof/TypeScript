/**
 * Supported image formats for conversion
 */
enum ImageFormat {
  Png = "png",
  Jpeg = "jpeg",
}

/**
 * Represents the dimensions of an image
 */
interface IResolution {
  /** Width in pixels */
  width: number;
  /** Height in pixels */
  height: number;
}

/**
 * Represents an image conversion configuration with format and dimensions
 */
interface IImageConversion extends IResolution {
  /** Target image format */
  format: ImageFormat;
}

/**
 * Interface defining the public methods for the ImageBuilder class
 */
interface IImageBuilder {
  /** Add PNG as a target format */
  addPng(): IImageBuilder;
  /** Add JPEG as a target format */
  addJpeg(): IImageBuilder;
  /** Add a target resolution */
  addResolution(width: number, height: number): IImageBuilder;
  /** Build the list of all image conversion configurations */
  build(): IImageConversion[];
}

/**
 * Builder class for creating image conversion configurations
 * Allows fluent interface for defining formats and resolutions
 */
class ImageBuilder implements IImageBuilder {
  private formats: ImageFormat[] = [];
  private resolutions: IResolution[] = [];
  addPng(): ImageBuilder {
    if (this.formats.includes(ImageFormat.Png)) {
      return this;
    }
    this.formats.push(ImageFormat.Png);
    return this;
  }

  addJpeg(): ImageBuilder {
    if (this.formats.includes(ImageFormat.Jpeg)) {
      return this;
    }
    this.formats.push(ImageFormat.Jpeg);
    return this;
  }

  addResolution(width: number, height: number): ImageBuilder {
    // Validate width and height are positive numbers
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive numbers");
    }
    
    // Check for duplicate resolutions
    const isDuplicate = this.resolutions.some(
      resolution => resolution.width === width && resolution.height === height
    );
    
    if (!isDuplicate) {
      this.resolutions.push({ width, height });
    }
    
    return this;
  }

  build(): IImageConversion[] {
    const res: IImageConversion[] = [];
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

console.log(
  new ImageBuilder()
    .addJpeg()
    .addJpeg()
    .addResolution(100, 50)
    .addResolution(200, 100)
    .build()
);


