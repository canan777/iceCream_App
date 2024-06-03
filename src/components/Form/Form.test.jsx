import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from '@testing-library/user-event';

test('Koşulların onaylanmasına göre buton aktifliği', async () => {
  // user kurulumu yap
    const user = userEvent.setup();
    
  // test edilecek bileşeni ekran bas
  render(<Form />);

  // gerekli elemanları çağır
  const checkBox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  //1) checkbox tiksizdir
  expect(checkBox).not.toBeChecked();

  //2) buton inaktiftir
  expect(button).toBeDisabled();

  //3) checboxa tıkla
  await user.click(checkBox);

  //4) buton aktiftir
  expect(button).toBeEnabled();

  //5) chebox'tan tiki kaldır
  await user.click(checkBox);

  //6) buton inaktiftir
  expect(button).toBeDisabled();
});

test('Onay butonu hover durumuna göre bildirim gözükür', async () => {
    const user = userEvent.setup();
  
    render(<Form />);
  
    const checkBox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');
  
    // normal şartlarda getByText'e çağıracağımız elemanın içindeki yazının tamamını veririz
    //   const popup = screen.getByText(
    //     'Size gerçekten bir şey teslim etmeyeceğiz'
    //   );
  
    // eğerki exact değerini true yaparsak buna gerek kalmas
    //   const popup2 = screen.getByText('Size gerçekten', { exact: false });
  
    // exact false mantığında çalışır ama regex tanımı
    const popup = screen.getByText(/size gerçekten/i); // i > insensetive
  
    // 1) checkbox tikle
    await user.click(checkBox);
  
    // 2) bildirim gözükmüyor mu?
    expect(popup).not.toBeVisible(); // opacity > 0 || display !== none || visibty !== hidden
  
    // 3) mouse butonuna üzerine götür
    fireEvent.mouseEnter(button);
  
    // 4) bildiirim gözükuyor mu?
    expect(popup).toBeVisible();
  
    // 5) mouse'u butonun üzerinden çek
    fireEvent.mouseLeave(button);
  
    // 6) bildiirim gözükmüyor mu?
    expect(popup).not.toBeVisible();
  });