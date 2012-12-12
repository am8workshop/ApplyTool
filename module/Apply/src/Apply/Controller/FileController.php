<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Apply\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\File\Transfer\Adapter\Http as Zend_File_Transfer_Adapter_Http;

class FileController extends AbstractActionController
{

	public function uploadAction()
	{
		$adapter = new Zend_File_Transfer_Adapter_Http();
		
		$adapter->setDestination('data');
		
		if (!$adapter->receive()) {
			
			$messages = $adapter->getMessages();
			echo implode("\n", $messages);
		}
		return "";
	}
}
