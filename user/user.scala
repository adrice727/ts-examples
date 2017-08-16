
case class User(name: Name, email: Email, address: Option[Address] = None, phone: Option[Phone] = None)
case class Name(first: String, last: String, middleInitial: Option[Char] = None)
case class Email(primary: String, secondary: Option[String] = None)
case class Address(street: String, streetAdditional: Option[String] = None, city: String, state: String, zip: Int)
case class Phone(primary: String, secondary: Option[String] = None)


val tim = User(
  Name("tim", "pike", Some('d')),
  Email("tim22@gmail.com"),
  Some(Address("1222 Haight Street", Some("Apt 22"), "San Francisco", "CA", 94117)),
  Some(Phone("5553838393"))
)

val susan = User(
  Name("susan", "williamson"),
  Email("susq@gmail.com"),
  Some(Address("787 Waller Street", None, "San Francisco", "CA", 94114)),
  Some(Phone("7872982929"))
)

val lili = User(
  Name("lili", "halson"),
  Email("lilihal04@gmail.com")
)

val peter = User(
  Name("peter", "song"),
  Email("peterokok@gmail.com"),
  Some(Address("373 Mandolin", Some("Apt 684"), "Oakland", "CA", 94608)),
  Some(Phone("9456278716"))
)

val anna = User(
  Name("anna", "klein"),
  Email("annaptok88@gmail.com"),
  Some(Address("2322 20th Steet", Some("Apt 4A"), "San Francisco", "CA", 94110)),
  Some(Phone("9456278716", Some("9457279992")))
)

val alberto = User(
  Name("alberto", "guzman"),
  Email("slimalberto@gmail.com"),
  Some(Address("440 Page Street", Some("Apt 1A"), "San Francisco", "CA", 94114))
)

val users = List(tim, susan, lili, peter, anna, alberto)

val usersAroundLowerHaight = users filter {
  case User(_,_, Some(Address(_,_,_,_, 94114)), _) => true
  case _ => false
}


// val userZipCodes = users.flatMap(user => user.address.map(addr => addr.zip))
val userZipCodes = users.flatMap(_.address.map(_.zip))
val secondaryPhoneNumbers = users.flatMap(_.phone.flatMap(_.secondary))
