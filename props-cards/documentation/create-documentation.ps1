$ErrorActionPreference = 'Stop'

$projectRoot = 'D:\React\props-cards'
$outputPath = Join-Path $projectRoot 'documentation\GymGrid_Project_Documentation.docx'
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$document = $word.Documents.Add()
$selection = $word.Selection

function Add-Paragraph([string]$text, [int]$style = 0) {
    $selection.Style = $style
    $selection.TypeText($text)
    $selection.TypeParagraph()
}

function Add-Bullet([string]$text) {
    $selection.Style = 0
    $selection.Range.ListFormat.ApplyBulletDefault()
    $selection.TypeText($text)
    $selection.TypeParagraph()
    $selection.Range.ListFormat.RemoveNumbers()
}

function Add-Screenshot([string]$path, [string]$caption, [double]$widthInches) {
    $selection.ParagraphFormat.Alignment = 1
    $shape = $selection.InlineShapes.AddPicture($path, $false, $true)
    $shape.Width = $widthInches * 72
    $selection.TypeParagraph()
    $selection.Font.Italic = $true
    $selection.Font.Size = 9
    $selection.TypeText($caption)
    $selection.TypeParagraph()
    $selection.Font.Italic = $false
    $selection.Font.Size = 11
    $selection.ParagraphFormat.Alignment = 0
    $selection.TypeParagraph()
}

try {
    $normal = $document.Styles.Item('Normal')
    $normal.Font.Name = 'Aptos'
    $normal.Font.Size = 11
    $document.Styles.Item('Title').Font.Name = 'Aptos Display'
    $document.Styles.Item('Heading 1').Font.Name = 'Aptos Display'
    $document.Styles.Item('Heading 2').Font.Name = 'Aptos Display'

    $selection.ParagraphFormat.Alignment = 1
    $selection.Font.Name = 'Aptos Display'
    $selection.Font.Size = 28
    $selection.Font.Bold = $true
    $selection.TypeText('GymGrid')
    $selection.TypeParagraph()
    $selection.Font.Size = 16
    $selection.Font.Bold = $false
    $selection.TypeText('Project Documentation')
    $selection.TypeParagraph()
    $selection.Font.Name = 'Aptos'
    $selection.Font.Size = 11
    $selection.TypeText('React Props and Cards Assignment')
    $selection.TypeParagraph()
    $selection.TypeText('Prepared: September 24, 2026')
    $selection.TypeParagraph()
    $selection.TypeParagraph()
    $selection.ParagraphFormat.Alignment = 0

    Add-Paragraph '1. Project Overview and Objective' 1
    Add-Paragraph 'GymGrid is a responsive single-page storefront for home-gym equipment. It presents a curated local catalog, lets visitors explore products, and provides a practical cart experience without requiring a backend or payment service.'
    Add-Paragraph 'The objective is to demonstrate component-based React development with props-driven product cards, predictable state management, routing, responsive design, and a polished user experience. The application also shows how browser storage can preserve a cart and wishlist across page refreshes.'

    Add-Paragraph '2. Modules and Features Implemented' 1
    Add-Paragraph 'Catalog and discovery' 2
    Add-Bullet 'Six locally defined gym-equipment products with images, pricing, categories, ratings, badges, and descriptions.'
    Add-Bullet 'Reusable ProductCard component receives product data and callback props for cart, wishlist, and quick-view actions.'
    Add-Bullet 'Keyword search, category filters, and sorting by featured order, price, or rating.'
    Add-Bullet 'Clear no-results state that resets the active filters.'
    Add-Paragraph 'Product interaction' 2
    Add-Bullet 'Quick-view modal displays a product summary, rating, benefits, price, and add-to-cart action.'
    Add-Bullet 'Modal can be closed by its close button, clicking the backdrop, or pressing Escape.'
    Add-Bullet 'Saved-gear wishlist with visual state and toast notifications.'
    Add-Paragraph 'Shopping cart' 2
    Add-Bullet 'Dedicated cart route with live item count, quantity controls, removal, subtotal, shipping, and total.'
    Add-Bullet 'Empty-cart state guides the visitor back to the catalog.'
    Add-Bullet 'Promo-code form is controlled; FORGE10 demonstrates the offer interaction.'
    Add-Bullet 'Cart and wishlist are persisted through localStorage.'
    Add-Paragraph 'Experience and accessibility' 2
    Add-Bullet 'Responsive desktop and mobile layout, premium-shipping announcement, header navigation, and customer-care footer.'
    Add-Bullet 'Meaningful image alt text, labeled controls, semantic buttons, keyboard Escape handling, and accessible dialog attributes.'

    Add-Paragraph '3. Technology and Tools Used' 1
    $table = $document.Tables.Add($selection.Range, 1, 2)
    $table.Borders.Enable = 1
    $table.Cell(1,1).Range.Text = 'Technology / Tool'
    $table.Cell(1,2).Range.Text = 'Purpose in the Project'
    $items = @(
        @('React 19', 'Component-based interface, hooks, state, effects, and props.'),
        @('Vite', 'Development server and production build tooling.'),
        @('React Router', 'Routes for the catalog and shopping-cart pages.'),
        @('React Toastify', 'Success and information feedback after product actions.'),
        @('Lucide React', 'Interface icons for cart, search, filters, wishlist, and controls.'),
        @('CSS', 'Custom responsive layout, product cards, modal, and storefront styling.'),
        @('localStorage', 'Browser-based persistence for cart and saved-gear data.'),
        @('ESLint', 'Static code-quality checks.')
    )
    foreach ($item in $items) {
        $row = $table.Rows.Add()
        $row.Cells.Item(1).Range.Text = $item[0]
        $row.Cells.Item(2).Range.Text = $item[1]
    }
    $selection.SetRange($document.Content.End - 1, $document.Content.End - 1)
    $selection.TypeParagraph()

    Add-Paragraph '4. Screenshots' 1
    Add-Paragraph 'The following screenshots show representative states of the implemented interface.'
    Add-Screenshot (Join-Path $projectRoot 'public\catalog.png') 'Figure 1. Desktop product catalog with hero section, discovery controls, and reusable product cards.' 6.25
    Add-Screenshot (Join-Path $projectRoot 'public\catalog-mobile.png') 'Figure 2. Mobile-responsive version of the product catalog.' 3.15
    Add-Screenshot (Join-Path $projectRoot 'public\cart-empty.png') 'Figure 3. Empty-cart route with a clear return-to-catalog action.' 6.0

    Add-Paragraph '5. Appendix' 1
    Add-Paragraph 'Project structure notes' 2
    Add-Bullet 'src/data/equipment.js contains the local catalog data and derives the available categories.'
    Add-Bullet 'src/components contains the focused UI modules: Header, Footer, CatalogPage, ProductCard, ProductModal, and CartPage.'
    Add-Bullet 'src/App.jsx owns cart and wishlist state, persistence, and route composition.'
    Add-Paragraph 'References' 2
    Add-Bullet 'React documentation: https://react.dev/'
    Add-Bullet 'Vite documentation: https://vite.dev/'
    Add-Bullet 'React Router documentation: https://reactrouter.com/'
    Add-Bullet 'React Toastify documentation: https://fkhadra.github.io/react-toastify/'
    Add-Bullet 'Lucide icon library: https://lucide.dev/'
    Add-Paragraph 'Additional notes' 2
    Add-Paragraph 'All products are local mock data. The checkout button is a visual interface element only; no payment processing or backend service is connected. The FORGE10 code demonstrates controlled form handling and is intentionally not applied to the displayed order total.'

    $document.SaveAs([ref]$outputPath, [ref]16)
}
finally {
    if ($document) { $document.Close() }
    if ($word) { $word.Quit() }
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($selection) | Out-Null
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($document) | Out-Null
    [System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
    [GC]::Collect()
    [GC]::WaitForPendingFinalizers()
}
