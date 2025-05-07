from main_page import MainPage
import time


class Test_sanity_main_page():
    def test_sanity(self, driver):
        main_page = MainPage(driver)
        
        ## Verify URL
        main_page.go_to_main_page()
        assert driver.current_url == main_page.url, 'URL not found'
        time.sleep(3)
        
        ## Verify top page elements
        header = main_page.verify_header()
        assert header is True, 'Header not found'
        print('Header element located')

        cart = main_page.verify_cart()
        assert cart is True, 'Cart not found'
        print('Cart element located')
        time.sleep(1)
        
        top_image = main_page.verify_top_image()
        assert top_image is True, 'Top image not found'
        print('Top image located')
        time.sleep(1)
        
        
        
   
        
        