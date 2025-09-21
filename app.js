document.addEventListener('DOMContentLoaded', () => {
    // Функция для закрытия всех выпадающих списков
    function closeAll() {
        document.querySelectorAll('.dimension-options, .custom-options').forEach(opt => {
            opt.style.display = 'none';
        });
    }

    // Обработка верхнего блока размеров
    document.querySelectorAll('.dimension-section').forEach(section => {
        const btn = section.querySelector('.dimension-btn');
        const options = section.querySelector('.dimension-options');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = options.style.display === 'block';
            closeAll();
            if (!isOpen) {
                options.style.display = 'block';
            }
        });

        options.querySelectorAll('div').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                btn.textContent = opt.textContent + ' ▼';
                options.style.display = 'none';
            });
        });
    });

    // Обработка нижних селектов
    document.querySelectorAll('.custom-select').forEach(select => {
        const options = select.querySelector('.custom-options');
        const firstSpan = select.querySelector('span:first-child');

        select.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = options.style.display === 'block';
            closeAll();
            if (!isOpen) {
                options.style.display = 'block';
            }
        });

        options.querySelectorAll('div').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                firstSpan.textContent = opt.textContent;
                options.style.display = 'none';
            });
        });
    });

    // Закрытие выпадающих списков при клике вне их
    document.addEventListener('click', closeAll);

    // Обработка кнопки "В корзину"
    document.getElementById('addToCart').addEventListener('click', () => {
        alert('Товар добавлен в корзину!');
    });
});