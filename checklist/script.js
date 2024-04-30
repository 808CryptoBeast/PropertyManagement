document.addEventListener('DOMContentLoaded', function() {
    const mainItems = document.querySelectorAll('.main-item');

    mainItems.forEach(item => {
        const sublist = item.querySelector('.sublist');
        sublist.style.display = 'none'; // Initially hide sublist

        const checkboxes = item.querySelectorAll('input[type="checkbox"]');
        const mainCheckbox = item.querySelector('.main-checkbox');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // Apply strike-through style to individual checkbox when checked
                if (checkbox.checked) {
                    checkbox.parentNode.style.textDecoration = 'line-through';
                } else {
                    checkbox.parentNode.style.textDecoration = 'none';
                }

                // Check if all checkboxes within the main item are checked
                const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
                if (allChecked) {
                    // Apply strike-through style and green opaque effect to the main item
                    item.style.textDecoration = 'line-through';
                    item.style.backgroundColor = 'rgba(0, 128, 0, 0.5)'; // Green opaque effect
                } else {
                    item.style.textDecoration = 'none';
                    item.style.backgroundColor = 'initial'; // Remove green opaque effect
                }
            });
        });

        item.addEventListener('click', function(event) {
            // Check if the click target is the main item itself
            if (event.target === item) {
                sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none'; // Toggle sublist visibility
            }
        });
    });
});
