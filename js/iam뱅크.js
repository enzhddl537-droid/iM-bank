$(function(){
    $('.down').click(function(){
        $('.Asset').toggle();
        $(this).toggleClass('on')
    });
    $('#pa').click(function(){
        $('.ffff,.uuoo').hide();
        $(this).css('color','rgb(0, 90, 207)');
        $('#pb').css('color','#a1a1a1');
    });
    $('#pb').click(function(){
        $('.ffff,.uuoo').show();
        $(this).css('color','rgb(0, 90, 207)');
        $('#pa').css('color','#a1a1a1');
    });
})

// 수정: 푸터 펼침 메뉴 (위로 열림 / 하나만 열림 / 바깥 클릭 및 ESC로 닫힘)
document.querySelectorAll('.footer-family').forEach((menu) => {
    menu.addEventListener('toggle', () => {
        if (!menu.open) return;
        document.querySelectorAll('.footer-family').forEach((other) => {
            if (other !== menu) other.open = false;
        });
    });
    menu.querySelectorAll('[data-value]').forEach((item) => {
        item.addEventListener('click', () => {
            menu.querySelector('.footer-family-label').textContent = item.textContent;
            const input = menu.querySelector('input');
            input.value = item.dataset.value;
            input.dispatchEvent(new Event('change', {bubbles:true}));
            menu.open = false;
            menu.querySelector('summary').focus();
        });
    });
});
document.addEventListener('click', (event) => {
    if (event.target.closest('.footer-family')) return;
    document.querySelectorAll('.footer-family').forEach((menu) => menu.open = false);
});
document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.footer-family[open]').forEach((menu) => {
        menu.open = false;
        menu.querySelector('summary').focus();
    });
});
