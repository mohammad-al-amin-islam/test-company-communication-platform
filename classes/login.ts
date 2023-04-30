export class LoginClass {
  private readonly page: any;
  private readonly enterEmail: any;
  private readonly enterPassword: any;
  private readonly sigInButton: any;
  constructor(page: any) {
    this.page = page;
    // this.signInLink = page.getByRole("link", { name: "Sign In" });
    this.enterEmail = page.getByPlaceholder("Enter your Email Address");
    this.enterPassword = page.getByPlaceholder("Enter your password");
    this.sigInButton = page.getByRole("button", { name: "Sign In" });
  }

  async gotoUrl() {
    await this.page.goto("https://company-communication-platform.vercel.app/");
  }

  async login(email: string, password: string) {
    await this.enterEmail.click();
    await this.enterEmail.fill(email);
    await this.enterPassword.fill(password);
    await this.enterPassword.click();
    await this.sigInButton.click();
  }
}
