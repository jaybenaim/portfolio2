require "application_system_test_case"

class AboutMesTest < ApplicationSystemTestCase
  setup do
    @about_me = about_mes(:one)
  end

  test "visiting the index" do
    visit about_mes_url
    assert_selector "h1", text: "About Mes"
  end

  test "creating a About me" do
    visit about_mes_url
    click_on "New About Me"

    fill_in "Text", with: @about_me.text
    click_on "Create About me"

    assert_text "About me was successfully created"
    click_on "Back"
  end

  test "updating a About me" do
    visit about_mes_url
    click_on "Edit", match: :first

    fill_in "Text", with: @about_me.text
    click_on "Update About me"

    assert_text "About me was successfully updated"
    click_on "Back"
  end

  test "destroying a About me" do
    visit about_mes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "About me was successfully destroyed"
  end
end
