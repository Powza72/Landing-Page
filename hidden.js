 const btn = document.getElementById('seeMoreBtn');
  const hiddenItems = document.querySelectorAll('.education-item.hidden');

  btn.addEventListener('click', () => {
    const isHidden = hiddenItems[0].classList.contains('hidden');
    if (isHidden) {
      // แสดงทั้งหมด
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      btn.textContent = 'See Less';
    } else {
      // ซ่อนรายการที่เกิน 2 อัน
      hiddenItems.forEach(item => item.classList.add('hidden'));
      btn.textContent = 'See More';
      // เลื่อนขึ้นไปที่ section education (optional)
      document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
    }
  });