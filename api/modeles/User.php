<?php
use Doctrine\ORM\Mapping as ORM;
/**
 * User
 * @ORM\Table(name="user")
 * @ORM\Entity
 */
class User
{
    /**
     * @var int
     * 
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="user_id_seq", allocationSize=1, initialValue=1)
     */
    public $id;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="salutation", type="string", length=240, nullable=true)
     */
    public $salutation;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="firstname", type="string", length=420, nullable=true)
     */
    public $firstname;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="lastname", type="string", length=240, nullable=true)
     */
    public $lastname;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="login", type="string", length=240, nullable=true)
     */
    public $login;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="email", type="string", length=240, nullable=true)
     */
    public $email;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="telephone", type="string", length=240, nullable=true)
     */
    public $telephone;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="password", type="string", length=240, nullable=true)
     */
    public $password;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="adresse", type="string", length=240, nullable=true)
     */
    public $adresse;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="postalcode", type="string", length=240, nullable=true)
     */
    public $postalcode;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set salutation.
     *
     * @param string|null $salutation
     *
     * @return User
     */
    public function setSalutation($salutation = null)
    {
        $this->salutation = $salutation;

        return $this;
    }

    /**
     * Get salutation.
     *
     * @return string|null
     */
    public function getSalutation()
    {
        return $this->salutation;
    }

    /**
     * Set firstname.
     *
     * @param string|null $firstname
     *
     * @return User
     */
    public function setFirstname($firstname = null)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname.
     *
     * @return string|null
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set lastname.
     *
     * @param string|null $lastname
     *
     * @return User
     */
    public function setLastname($lastname = null)
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * Get lastname.
     *
     * @return string|null
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Set login.
     *
     * @param string|null $login
     *
     * @return User
     */
    public function setLogin($login = null)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login.
     *
     * @return string|null
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set email.
     *
     * @param string|null $email
     *
     * @return User
     */
    public function setEmail($email = null)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email.
     *
     * @return string|null
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set telephone.
     *
     * @param string|null $telephone
     *
     * @return User
     */
    public function setTelephone($telephone = null)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone.
     *
     * @return string|null
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set password.
     *
     * @param string|null $password
     *
     * @return User
     */
    public function setPassword($password = null)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password.
     *
     * @return string|null
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set adresse.
     *
     * @param string|null $adresse
     *
     * @return User
     */
    public function setAdresse($adresse = null)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse.
     *
     * @return string|null
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * Set postalcode.
     *
     * @param string|null $postalcode
     *
     * @return User
     */
    public function setPostalcode($postalcode = null)
    {
        $this->postalcode = $postalcode;

        return $this;
    }

    /**
     * Get postalcode.
     *
     * @return string|null
     */
    public function getPostalcode()
    {
        return $this->postalcode;
    }
}
