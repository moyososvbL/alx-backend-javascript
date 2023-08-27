/**
 * Contains the miscellaneous route handlers.
 * @author Oganla Moyosoreoluwa <https://github.com/MoyososvbL>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
