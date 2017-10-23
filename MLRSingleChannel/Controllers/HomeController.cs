using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MLRSingleChannel.Controllers
{
  [RoutePrefix("")]
  public class HomeController : Controller
  {

    [Route("")]
    public ActionResult Index()
    {
      ViewBag.Title = "Home Page";

      return View("NgApp");
    }
  }
}
