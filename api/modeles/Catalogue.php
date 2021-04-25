<?php
use Doctrine\ORM\Mapping as ORM;
/**
 * Catalogue
 * @ORM\Table(name="catalogue")
 * @ORM\Entity
 */
class Catalogue
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="catalogue_id_seq", allocationSize=1, initialValue=1)
     */
    public $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="ref", type="string", length=50, nullable=true)
     */
    public $ref;

    /**
     * @var string|null
     *
     * @ORM\Column(name="designation", type="string", length=255, nullable=true)
     */
    public $designation;

    /**
     * @var float|null
     *
     * @ORM\Column(name="prix", type="float", precision=10, scale=0, nullable=true)
     */
    public $prix;

    /**
     * @var string|null
     * 
     * @ORM\Column(name="description", type="float", precision=10, scale=0, nullable=true)
     */
    public $description;


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
     * Set ref.
     *
     * @param string|null $ref
     *
     * @return Catalogue
     */
    public function setRef($ref = null)
    {
        $this->ref = $ref;

        return $this;
    }

    /**
     * Get ref.
     *
     * @return string|null
     */
    public function getRef()
    {
        return $this->ref;
    }

    /**
     * Set designation.
     *
     * @param string|null $designation
     *
     * @return Catalogue
     */
    public function setDesignation($designation = null)
    {
        $this->designation = $designation;

        return $this;
    }

    /**
     * Get designation.
     *
     * @return string|null
     */
    public function getDesignation()
    {
        return $this->designation;
    }

    /**
     * Set prix.
     *
     * @param float|null $prix
     *
     * @return Catalogue
     */
    public function setPrix($prix = null)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix.
     *
     * @return float|null
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Catalogue
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }
}
