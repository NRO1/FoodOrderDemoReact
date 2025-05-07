from main_page import MainPage
import time
import platform


class TestSanity():
    def test_sanity(self, driver):
        main_page = MainPage(driver)
        main_page.go_to_main_page()
        assert driver.current_url == main_page.url, 'URL not found'
        print(driver.current_url, main_page.url)
        time.sleep(3)
        print(platform.system())
        
        header = main_page.verify_header()
        assert header is True, 'Header not found'
        print('Header element located')
        time.sleep(1)
        
        cart = main_page.verify_cart()
        assert cart is True, 'Cart not found'
        print('Cart element located')
        time.sleep(1)
        
        