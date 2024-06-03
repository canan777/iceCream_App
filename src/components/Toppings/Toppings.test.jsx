import {
    findAllByRole,
    render,
    screen,
  } from '@testing-library/react';
  import Toppings from '.';
  import userEvent from '@testing-library/user-event';
  
  test("Api'dan gelen veriler için ekran kartlar basılıyor mu?", async () => {
    render(<Toppings />);
  
    const images = await screen.findAllByAltText('sos-resim');
  
    expect(images.length).toBeGreaterThan(0);
  });
  
  test('sosları ekleme ve çıkarma işlemleri toplama etki eder', async () => {
    const user = userEvent.setup();
    render(<Toppings />);
  
    // toplam span'ı al
    const total = screen.getByTestId('total');
  
    // bütun sosları çağır
    const toppings = await screen.findAllByRole('checkbox');
  
    // 1) sosların ücreti 0 mı?
    expect(total.textContent).toBe('0');
  
    // 2) soslardan birine tıkla
    await user.click(toppings[0]);
  
    // 3) total 3'e eşit mi?
    expect(total.textContent).toBe('3');
  
    // 4) solardan birine daha tıkla
    await user.click(toppings[2]);
  
    // 5) total 6'ya eşit mi?
    expect(total.textContent).toBe('6');
  
    // 6) daha önce eklenen sosa tekrar tıkla
    await user.click(toppings[0]);
  
    // 7) total 3'e eşit mi?
    expect(total.textContent).toBe('3');
  
    // 8) daha önce eklenen sosa tekrar tıkla
    await user.click(toppings[2]);
  
    // 9) total 0'e eşit mi?
    expect(total.textContent).toBe('0');
  });