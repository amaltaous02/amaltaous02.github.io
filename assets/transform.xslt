<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
    xmlns:foaf="http://xmlns.com/foaf/0.1/"
    xmlns:vcard="http://www.w3.org/2006/vcard/ns#">

    <!-- Parameter to hold the language value -->
    <xsl:param name="lang" select="'fr'"/>

    <xsl:template match="/">
        <div class="mu-service-header" typeof="foaf:Document">
            <h2 class="mu-heading-title" property="foaf:title">
                <xsl:value-of select="academicPath/title/name[@lang=$lang]"/>
            </h2>  
            <h6 class="mu-heading-title" property="foaf:subtitle">
                <xsl:value-of select="academicPath/subtitle/name[@lang=$lang]"/>
            </h6>             
            <span class="mu-header-dot"></span>
        </div>
        <div class="mu-service-content">
            <div class="row">
                <xsl:for-each select="academicPath/course">
                    <div class="col-md-4 col-sm-6">
                        <div class="mu-service-content-single" typeof="foaf:Course">
                            <span class="mu-service-icon-box">
                                <i class="fa fa-graduation-cap"></i>
                            </span>
                            <h4 property="foaf:name">
                                <xsl:value-of select="name[@lang=$lang]"/>
                            </h4>
                            <p property="foaf:status">
                                <xsl:value-of select="status[@lang=$lang]"/>
                            </p>
                        </div>
                    </div>
                </xsl:for-each>
            </div>
        </div>
    </xsl:template>
</xsl:stylesheet>
