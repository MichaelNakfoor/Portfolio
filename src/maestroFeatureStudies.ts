import { maestroScreenshotSizes } from "./maestroScreenshotSizes";

export type MaestroStudyImage = {
  src: string;
  title: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
};

export type MaestroStudySection = {
  id: string;
  title: string;
  paragraphs: string[];
  images: MaestroStudyImage[];
  related?: { to: string; label: string };
};

type MaestroFeatureStudy = {
  title: string;
  introduction: string | string[];
  subtitle?: string;
  focus: string;
  sections: MaestroStudySection[];
  pipeline?: string[];
};

function screenshot(file: string, title: string, caption: string, alt: string): MaestroStudyImage {
  const [width, height] = maestroScreenshotSizes[file];
  return { src: `/images/maestro/feature-pages/${file}`, title, caption, alt, width, height };
}

export const maestroFeatureStudies: Record<string, MaestroFeatureStudy> = {
  browsing: {
    title: "Browsing & Templates",
    subtitle: "A Shared Framework for Different Workflows",
    introduction: [
      "Maestro gives customers several ways to begin a design. They can return to something they've already created, choose a blank label product and start from scratch, or select a pre-designed template and adapt it to a compatible label.",
      "Although these workflows serve different purposes, they share much of the same underlying functionality. Each involves retrieving and presenting collections of items, navigating categories, searching or filtering results, and responding to a selection.",
      "I developed a reusable browsing framework in TypeScript using class inheritance. Common functionality was implemented in a base class, while specialized subclasses handled the data, presentation, and controls required by each workflow. This allowed me to extend the browsing system without repeatedly developing the same functionality for every new feature."
    ],
    focus: "",
    sections: [
      {
        id: "saved-designs", title: "Saved Designs",
        paragraphs: ["Customers returning to Maestro needed an easy way to find work they had previously created, particularly those maintaining large collections of designs.","I developed a browsing interface that combined folder organization, searching, sorting, and thumbnail previews. Customers could organize their designs into folders, browse visually, or locate a particular design without having to remember exactly where they saved it.","The thumbnail previews were especially useful because a recognizable design is often easier to find visually than by filename."],
        images: [screenshot("saved-designs.png", "Saved Designs", "Folders, search, sorting, and thumbnail previews for returning to existing work.", "Saved Designs browser with a folder tree, search box, sorting control, and label-design thumbnails.")],
      },
      {
        id: "blank-templates", title: "Blank Label Templates",
        paragraphs: ["For customers starting a new design, the physical label product determines the size and shape of the editing workspace.","The Blank Templates browser uses the shared framework to present Online Labels' product catalog, with controls for narrowing the selection by format, shape, dimensions, and other product characteristics. Customers can browse sheets or rolls, search for a particular product, or explore the available shapes and layouts.","Once a product is selected, Maestro creates an editing canvas based on that label's geometry. The browsing interface therefore does more than help customers find a product; it connects the physical dimensions of the label to the design environment in which they'll work."],
        images: [
          screenshot("blank-templates-filtered-sheets.png", "Sheet formats", "Sheet layouts with product search and dimension filters.", "Blank Templates browser showing sheet products, width and height filters, and printing options."),
          screenshot("blank-templates-rolls.png", "Roll formats", "Roll products within the same browsing framework.", "Blank Templates browser with Rolls selected and a grid of roll-label products."),
          screenshot("blank-templates-ovals.png", "Shape-based discovery", "Oval label products shown with their dimensions and layouts.", "Blank Templates browser filtered to oval labels, with shape choices in the sidebar."),
          screenshot("blank-template-editor.png", "From product to canvas", "The selected oval label opens as a blank editing workspace.", "Maestro editor showing a blank oval label with its boundary and editing controls."),
        ],
      },
      {
        id: "predesigned-templates", title: "Pre-Designed Templates",
        paragraphs: ["Not every customer wants to begin with a blank label. Maestro also provides a collection of pre-designed artwork that customers can customize for their own purposes.","This workflow reverses the order used by Blank Templates. Rather than choosing a product and then creating a design, customers begin by selecting artwork that appeals to them. Maestro then presents compatible label products on which that design can be used.","I developed the workflow to connect template discovery, product compatibility, and the editing environment. Once the customer selects a product, the application uses SVG-based resizing to adapt the artwork to the chosen label dimensions, allowing the customer to continue editing the result.","Although the browsing experience differs from the other workflows, it relies on the same reusable framework beneath the interface."],
        images: [
          screenshot("predesigned-gallery.png", "Discover a design", "Visual categories and keyword search lead into the template gallery.", "Pre-Designed Templates gallery with category navigation, keyword search, and colorful label thumbnails."),
          screenshot("predesigned-choose-product.png", "Choose compatible stock", "The selected design is paired with a compatible label product.", "Choose a Template screen for a neon beach label design, showing compatible product layouts."),
          screenshot("predesigned-editor.png", "Continue in the editor", "The template becomes editable artwork on the chosen label.", "Maestro editing canvas with a circular Venice Wave template fitted to the selected label."),
        ],
        related: { to: "/work/maestro/tools", label: "Explore the editing environment" },
      },
    ],
  },
  tools: {
    title: "Tools & Properties",
    subtitle: "Building the Maestro Editing Environment",
    introduction: [
      "Maestro's editing workspace is where customers turn a blank label or an existing template into their own design. I designed and developed the entire editing environment, including the SVG canvas, object manipulation, contextual property controls, typography tools, and custom inline text editor.",
      "Much of the engineering involved coordinating these features so they behaved as parts of a single application. Selecting an object on the canvas needed to update its properties and its entry in the object list. Changing a property needed to update the artwork immediately. Editing text required an entirely different set of interactions from moving or resizing the text object itself.",
      "Getting those details to work together was one of the more interesting aspects of developing Maestro."
    ],
    focus: "",
    sections: [
      {
        id: "objects", title: "Working with SVG Objects",
        paragraphs: ["I built Maestro's design canvas around SVG, allowing customers to create and manipulate shapes, text, and other artwork directly in the browser.","Objects can be selected, moved, resized, rotated, and arranged within the label's boundaries. The editor provides direct manipulation on the canvas alongside controls for adjusting properties numerically, giving customers different ways to achieve the same result.","I also developed the object list, which provides another way to select and organize the elements in a design. The list supports layer ordering and locking, with selection synchronized between the list and the canvas."],
        images: [screenshot("svg-shapes-selection.png", "Canvas and object list", "Selected SVG artwork, contextual properties, and a corresponding object list.", "SVG label canvas containing shapes and clip art, with a selected shape, object properties, and layer list.")],
      },
      {
        id: "color-images", title: "Colors, Gradients, and Images",
        paragraphs: ["Maestro provides several ways to control the appearance of artwork, including solid colors, gradients, outlines, and image adjustments.","I developed color-selection controls with predefined palettes, recent and favorite colors, and an eyedropper. Gradient controls allow customers to adjust the appearance of filled objects, while the surrounding property panels expose settings relevant to the current selection.","These tools are connected directly to the objects being edited. A customer can select an element, change its appearance, and see the result immediately without switching to a separate editing environment.","I also developed image-adjustment and cropping capabilities so photographs and other imported graphics could be incorporated alongside vector shapes and text."],
        images: [
          screenshot("color-palette.png", "Solid-color controls", "Palette choices, recent colors, and eyedropper access beside the selected artwork.", "Select a Color dialog showing swatches and an eyedropper while a purple shape is selected on the canvas."),
          screenshot("gradient-editor.png", "Gradient editing", "Gradient controls remain connected to the selected canvas object.", "Gradient color editor open beside a selected shape and a multicolored label composition."),
        ],
      },
      {
        id: "typography", title: "Typography and Text Effects",
        paragraphs: ["Typography is an important part of label design, and Maestro needed to support considerably more than placing ordinary text inside a rectangle.","I developed font selection and formatting controls, including support for Google Fonts and installed fonts, along with character-level styling and color adjustments. Customers can combine different styles within the same text object rather than applying a single appearance to an entire block of text.","I also implemented text-on-a-curve functionality, allowing lettering to follow a curved path. This is particularly useful for circular labels, badges, and other designs where text needs to follow the shape of the artwork.","These features had to work within the same SVG editing environment as the application's other design elements."],
        images: [
          screenshot("advanced-text-color.png", "Text styling", "Advanced color controls applied to selected text.", "Text selected within a label design with the advanced color picker and text-formatting toolbar visible."),
          screenshot("curved-text.png", "Text on a curve", "Curved lettering integrated into the label artwork.", "Mango label artwork with curved text above a skull illustration and text controls at the left."),
        ],
      },
      {
        id: "inline-editing", title: "A Custom Inline Rich-Text Editor",
        paragraphs: ["One of the more challenging features I developed for Maestro was its inline rich-text editor. Rather than relying on the browser's built-in text editing controls, I implemented the editing behavior directly using SVG text elements and my own interaction logic.","That meant developing functionality normally provided by a conventional text editor, including caret positioning and movement, character selection, mixed formatting, and familiar keyboard shortcuts. Customers could click directly into a text object, select individual words or characters, and apply different styles without leaving the design canvas.","An additional challenge was distinguishing between editing the contents of a text object and manipulating the object itself. The same text needed to behave as editable content when the customer was typing, but as a graphical element when selected, positioned, resized, or transformed.","I developed the interaction logic to manage those behaviors within the same workspace, keeping the surrounding artwork visible while the customer edited the text.","The typography and formatting also needed to carry through to the server-side rendering pipeline so the resulting PDF would accurately reproduce the design created in the browser."],
        images: [screenshot("inline-rich-text-editor.png", "Editing within the design", "A selected word and mixed formatting inside an editable text object.", "Inline text editor with the word Jumps selected, differently formatted words, a text-object boundary, and formatting controls.")],
        related: { to: "/work/maestro/printing", label: "Follow the SVG-to-PDF workflow" },
      },
    ],
  },
  generators: {
    title: "Integrated Generators",
    subtitle: "Bringing Structured Content into the Design Editor",
    introduction: [
      "Maestro's editing tools allow customers to create labels using text, images, and shapes, but some types of content require more specialized functionality. I developed integrated tools for mail merge, barcodes, nutrition labels, and QR codes, allowing customers to generate that content without leaving the design environment.",
      "Each feature presented its own requirements for collecting information, organizing inputs, generating the resulting content, and incorporating it into the customer's design.",
      "Mail merge introduced an additional challenge: producing different text and barcode content for each record in a spreadsheet while preserving the layout and formatting of a common design."
    ],
    focus: "",
    sections: [
      {
        id: "mail-merge", title: "Mail Merge and Variable Data",
        paragraphs: ["Mail merge allowed customers to create entire sets of personalized labels from spreadsheet data rather than entering information one label at a time.","I developed support for uploading Excel and CSV files to the server, where the data was parsed and processed for use within Maestro. Customers could map spreadsheet columns to fields in their designs, combine multiple values with fixed text, and assemble formatted content such as multiline mailing addresses.","The browser provided a preview of the merged results, allowing customers to inspect how individual records would appear before generating the final PDF.","Mail merge also supported barcode fields alongside ordinary text. A single spreadsheet could supply names, addresses, product identifiers, and barcode values, allowing customers to combine human-readable information with machine-readable content in the same label.","The printing workflow used that data to produce distinct labels while preserving the layout and styling of the original design. Coordinating server-side data processing, browser-based previews, and final PDF output made this a particularly interesting full-stack feature."],
        images: [
          screenshot("mail-merge-combined-fields.png", "Combine source fields", "Source columns are arranged into a combined text field.", "Mail merge dialog with source field names and a multiline combined-field expression for names and addresses."),
          screenshot("mail-merge-output-sheet.png", "Distinct record outputs", "A generated sheet contains different mailing-label records.", "Generated mailing-label sheet showing different names and postal addresses in individual label positions."),
        ],
      },
      {
        id: "barcodes", title: "Variable Barcodes",
        paragraphs: ["Barcodes extended Maestro's mail merge capabilities beyond ordinary text substitution.","I developed controls that allowed customers to associate a spreadsheet column with a barcode field, select the barcode format, and choose whether to display the encoded value as readable text beneath the barcode.","Because each barcode drew its value from the source data, customers could generate different codes for individual spreadsheet records rather than repeating the same barcode across an entire print run.","The barcode fields worked alongside the other mail merge fields, making it possible to combine product information, addresses, identifiers, and variable barcodes within a single label design."],
        images: [screenshot("variable-barcode-fields.png", "Variable barcode fields", "Field selection, barcode type, and display-text options in one dialog.", "Barcode Field dialog with source fields, EAN-13 barcode type, and a display-data-under-barcode toggle.")],
      },
      {
        id: "nutrition", title: "Nutrition Label Generator",
        paragraphs: ["Nutrition labels presented a different challenge. They contain structured information that needs to be arranged in a recognizable, consistent format, with specific typography and visual organization.","Rather than requiring customers to construct these layouts manually, I developed a generator that collected nutritional information through a dedicated interface. Customers could select a label format, enter the relevant values, adjust available options, and review the resulting layout.","The generator rendered the completed nutrition label as an image, which Maestro inserted into the design as an SVG image element. Customers could position and size the resulting graphic alongside their other artwork without having to build the nutrition label manually."],
        images: [screenshot("nutrition-label-generator.png", "Nutrition label generator", "Configurable nutrition inputs and formatting alongside a label preview.", "Nutrition Facts generator with format selection, serving and nutrient input fields, and a preview of the resulting nutrition label.")],
      },
      {
        id: "qr-codes", title: "QR Code Generator",
        paragraphs: ["I also developed a QR-code generator that allowed customers to turn structured information into a scannable graphic.","The interface provided different input options, including contact information, with a generated preview showing the resulting code before it was added to the design.","I advocated for QR-code support before its widespread adoption during the COVID-19 pandemic. I saw it as a useful way to connect printed labels to information and interactions beyond the physical product.","Once generated, the QR code was inserted into the design as an image within the SVG canvas. Customers could position and size it alongside their other design elements without having to create or import the code using an external application."],
        images: [screenshot("qr-code-generator.png", "QR-code generator", "Structured contact fields and a generated code preview.", "Generate a QR Code dialog with contact-information fields, a code preview, and an Add To Design button.")],
        related: { to: "/work/maestro/printing", label: "See how generated content reaches print" },
      },
    ],
  },
  printing: {
    title: "Precision Printing",
    subtitle: "From Browser-Based Design to Physical Production",
    introduction: [
      "One of the more challenging aspects of developing Maestro was ensuring that the artwork customers created in their browsers could be accurately reproduced as a printable document.",
      "The editing environment was built around SVG, but the finished design needed to become a PDF suitable for printing, either on a customer's own printer or through Online Labels' professional printing services. That meant reproducing the design on the server, preserving its dimensions, positioning, typography, and visual appearance.",
      "I designed and implemented the client-server rendering system that made this possible, along with the workflows connecting Maestro to product configuration, print approval, and the company's ordering systems."
    ],
    focus: "",
    sections: [
      {
        id: "rendering", title: "Reproducing SVG Artwork in PDF",
        paragraphs: ["The designs customers created in Maestro were built from SVG elements in the browser, but printing required something quite different. I needed to reproduce those designs as PDF documents while preserving their appearance, dimensions, and positioning.","I developed the server-side rendering system using .NET and iText. Maestro serialized the design into XML, which I received through an API endpoint I also developed. On the server, I deserialized the design and recreated its text, shapes, images, and transformations as PDF content, using ImageMagick and Ghostscript for supporting graphics operations.","Generating the individual design was only part of the process. I also had to account for the physical label product the customer had selected. For home printing, the system reproduced the rendered design across the appropriate label-sheet layout, matching the product's dimensions, shape, spacing, and arrangement.","Maintaining visual consistency between the SVG editor and the PDF renderer was especially important. Customers expected their printed labels to look like the designs they had created, regardless of which rendering environment produced them."],
        images: [
          screenshot("svg-design-canvas.png", "Design in the browser", "SVG artwork and object controls define the label composition.", "Maestro SVG design canvas showing a selected Mango label composition, property controls, and object list."),
          screenshot("pdf-print-sheet.png", "Print a label sheet", "The design repeated in a generated PDF sheet for home printing.", "Portrait PDF sheet containing ten repeated Mango labels in two columns."),
        ],
      },
      {
        id: "backend", title: "Developing the Application Backend",
        paragraphs: ["The rendering pipeline was only one part of Maestro's server-side architecture. As the application's sole developer, I was also responsible for the backend services and database functionality supporting the editor.","I developed the API endpoints used by the browser application, implemented the loading and saving of customer designs, and handled communication with the company's enterprise systems. My work included database access through an object-relational mapper, as well as writing and maintaining SQL Server stored procedures.","These services supported the application behind the scenes, allowing customers to retrieve their work, save changes, generate printable documents, and move their designs into the company's ordering workflows.","Because I developed both the browser application and the backend, I could design the interactions between them as parts of a single system rather than treating the editor and server as separate projects."],
        images: [],
      },
      {
        id: "production-options", title: "Configuring a Professional Print Order",
        paragraphs: ["Maestro also allowed customers to order professionally printed labels directly from their designs.","That introduced another set of requirements beyond generating a printable document. Customers needed to choose the physical product, including sheet or roll format, materials, finishes, and quantities. The application also needed to display pricing appropriate to the selected configuration.","I developed the interface and supporting application logic that connected those choices to the design being ordered. The customer could configure a printed product without leaving Maestro, bringing together the artwork and the manufacturing specifications required to produce it."],
        images: [screenshot("professional-print-options.png", "Professional print options", "Sheet or roll format, material, finish, quantity, and pricing.", "Professional printing dialog with Rolls selected, white paper, gloss lamination, quantity selection, and displayed pricing.")],
      },
      {
        id: "proof-review", title: "Reviewing the Design for Production",
        paragraphs: ["Before submitting a professional printing order, customers needed an opportunity to review both their artwork and the product they were ordering.","I developed the review workflow to present a generated preview, access to the PDF, and relevant production details such as roll orientation. The interface also explained considerations that could affect the printed result, including bleed and safe areas, image resolution, and differences between screen colors and printed colors.","These details were important because a design that looked correct on a monitor wasn't necessarily ready for physical production. RGB-to-CMYK conversion, for example, could produce differences between the colors customers saw in their browsers and those reproduced by the printing process.","The review step brought these considerations together before the customer approved the design and proceeded with the order."],
        images: [screenshot("professional-print-review.png", "Production review", "Preview, orientation, PDF access, and design approval before adding to the cart.", "Custom Printing Review dialog with a roll-label preview, Right First orientation, View PDF link, production checklist, and approval checkbox.")],
      },
      {
        id: "commerce", title: "Connecting Maestro to the Shopping Cart",
        paragraphs: ["The final step was integrating the customer's artwork and product configuration with Online Labels' enterprise ordering system.","I developed the integration that transferred the necessary design and order information into the shopping cart, including the selected product, production options, quantity, and generated artwork preview.","Customers could then review their configured label product alongside other items in their cart and complete the purchase through the company's existing commerce system.","This integration was an important part of Maestro's overall architecture. The application wasn't simply a design tool that exported files; it was connected to the business systems responsible for turning a customer's design into an order that could be fulfilled."],
        images: [screenshot("shopping-cart.png", "Configured order \u2014 Shopping cart detail", "Excerpt showing the artwork thumbnail, production specifications, quantity, and pricing carried over from Maestro.", "Shopping cart containing a configured roll-label order with a Mango artwork thumbnail, material and finish details, quantity, and price.")],
        related: { to: "/work/maestro/browsing", label: "Return to product and template discovery" },
      },
    ],
  },
};
