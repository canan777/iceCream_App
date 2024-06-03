import { getByTestId, render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from '@testing-library/user-event';

/*
 ! Seçiciler > 3 ana parçadan oluşur:
 ? Method [All] BySeçici
 * method > get | find | query
 * get > element başlangıçta dom'da var ise kullanılır | eleman bulamazsa test fail olur
 * query > get ile benzer çalışır ama | eleman bulamazsa null döndürür test devam eder
 * find > elementin ne zaman ekrana basılacağı belli değilse (async)
 
 * not: find methodu promise döndürür
 * bu yüzden async await ile kullanılmalı
 * 
 * eğer all kullanırsak cevap her zaman dizi şeklinde döner
 */

test("API'dan gelen veriler için ekrana kartlar basılır", async () => {
    render(<Scoops />);
  
    // ekrana basılan resimleri al
    const images = await screen.findAllByAltText('çeşit-resim');
  
    // gelen resimlerin sayısı 1 den büyük
    expect(images.length).toBeGreaterThanOrEqual(1);
  });

  test('Çeşit ekleme ve sıfırlama işleminin toplam fiyata etkisi', async () => {  
    // user kurulumu yap
    const user = userEvent.setup();
  
    // bileşeni ekrana bas
    render(<Scoops />);
  
    // ekleme ve sıfırlama butonlarını çağır
    const addButtons = await screen.findAllByRole('button', {
      name: 'Ekle',
    });
    const delButtons = await screen.findAllByRole('button', {
      name: 'Sıfırla',
    });

    // toplam spanı çağır
  const total = screen.getByTestId('total');

  // 1) Toplam fiyat 0'dır
  expect(total.textContent).toBe('0');

  // 2) Ekle butonlarından birine tıkla
  await user.click(addButtons[0]);

  // 3) Toplam Fiyatı 20 olur
  expect(total.textContent).toBe('20');

  // 4) Farklı bir çeşitten iki tane eklenir
  await user.dblClick(addButtons[2]);

  // 5) Toplam fiyatı 60 olur
  expect(total.textContent).toBe('60');

  // 6) 1 tane eklenenin sıfırla butonuna tıkla
  await user.click(delButtons[0]);

  // 7) Toplam fiyatı 40 olur
  expect(total.textContent).toBe('40');

  // 8) 2 tane ekleneni sıfırla butonuna tıkla
  await user.click(delButtons[2]);

  // 9) Toplam fiyatı 0 olur
  expect(total.textContent).toBe('0');
});